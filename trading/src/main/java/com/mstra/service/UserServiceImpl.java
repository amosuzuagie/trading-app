package com.mstra.service;

import com.mstra.config.JwtProvider;
import com.mstra.model.*;
import com.mstra.domain.VerificationType;
import com.mstra.repository.UserRepository;
import com.mstra.request.ResetPasswordRequest;
import com.mstra.response.APIResponse;
import com.mstra.response.AuthResponse;
import com.mstra.request.ForgotPasswordRequest;
import com.mstra.utils.OtpUtils;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private EmailService emailService;

    @Autowired
    private WatchlistService watchlistService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    TwoFactorOTPService twoFactorOTPService;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @Override
    public User findUserProfileByJwt(String jwt) {
        String email = JwtProvider.getEmailFromToken(jwt);
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found with email " + email));
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) throw new Exception("User not found");
        return user.get();
    }

    @Override
    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo, User user) {
        TwoFactorAuth twoFactorAuth = new TwoFactorAuth();
        twoFactorAuth.setEnabled(true);
        twoFactorAuth.setSendTo(verificationType);

        user.setTwoFactorAuth(twoFactorAuth);

        return userRepository.save(user);
    }

    @Override
    public User updatePassword(User user, String newPassword) {
        user.setPassword(newPassword);
        return userRepository.save(user);
    }


    public AuthResponse register(User user) {
        boolean isExisting = userRepository.findByEmail(user.getEmail()).isPresent();
        if (isExisting) throw new EntityExistsException("User email already existing");

        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setFullName(user.getFullName());
        userRepository.save(newUser);
        watchlistService.createWatchList(newUser);

        Authentication auth = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwt = JwtProvider.generateToken(auth);
        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setStatus(true);
        res.setMessage("Register Success");

        return res;
    }

    public AuthResponse login(User user) throws Exception {

        Authentication auth = authenticate(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = JwtProvider.generateToken(auth);

        User authUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found with email: " + user.getEmail()));

        if (user.getTwoFactorAuth().isEnabled()) {
            AuthResponse res = new AuthResponse();
            res.setMessage("Two factor is enabled");
            res.setTwoFactorAuthEnabled(true);
            String otp = OtpUtils.generateOTP();

            TwoFactorOTP oldOTP = twoFactorOTPService.findByUser(authUser.getId());
            if (oldOTP != null) twoFactorOTPService.deleteTwoFactorOTP(oldOTP);

            TwoFactorOTP newOTP = twoFactorOTPService.createTwoFactorOTP(authUser, otp, jwt);
            emailService.sendVerificationOTPEmail(user.getEmail(), otp);

            res.setSession(newOTP.getId());
            return res;
        }

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setStatus(true);
        res.setMessage("Login Success");

        return res;
    }

    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
        if (userDetails == null) throw new BadCredentialsException("Invalid email");
        if (!password.equals(userDetails.getPassword())) throw new BadCredentialsException("Invalid password");

        return new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
    }

    public AuthResponse verifySigninOTP(String otp, String id) throws Exception {

        TwoFactorOTP twoFactorOTP = twoFactorOTPService.findById(id);
        if (twoFactorOTPService.verifyTwoFactorOTP(twoFactorOTP, otp)){
            AuthResponse res = new AuthResponse();
            res.setTwoFactorAuthEnabled(true);
            res.setJwt(twoFactorOTP.getJwt());
            res.setMessage("Authentication verified");
            return res;

        }

        throw new Exception("Invalid OTP");
    }

    public AuthResponse sendForgotPasswordOTP(ForgotPasswordRequest request) throws MessagingException {
        User user = findUserByEmail(request.getSendTo());
        String otp = OtpUtils.generateOTP();
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        ForgotPasswordToken token = forgotPasswordService.findByUser(user.getId());

        if (token == null) token =
                forgotPasswordService.createToken(user, id, otp, request.getVerificationType(), request.getSendTo());

        if (request.getVerificationType().equals(VerificationType.EMAIL))
            emailService.sendVerificationOTPEmail(user.getEmail(), token.getOtp());

        AuthResponse response = new AuthResponse();
        response.setSession(token.getId());
        response.setMessage("Reset password OTP sent successfully");

        return response;
    }

    public APIResponse resetPassword(String id, String jwt, ResetPasswordRequest req) throws Exception {
        ForgotPasswordToken passwordToken = forgotPasswordService.findById(id);
        boolean isVerified = passwordToken.getOtp().equals(req.getOtp());

        if (isVerified) {
            this.updatePassword(passwordToken.getUser(), req.getPassword());
            APIResponse res = new APIResponse();
            res.setMessage("Password updated successfully");
            return res;
        }
        throw new Exception("Wrong OTP");
    }

}
