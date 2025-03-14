package com.mstra.service;

import com.mstra.config.JwtProvider;
import com.mstra.model.User;
import com.mstra.repository.UserRepository;
import com.mstra.response.AuthResponse;
import jakarta.persistence.EntityExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    public AuthResponse register(User user) {
        boolean isExisting = userRepository.findByEmail(user.getEmail()).isPresent();
        if (isExisting) throw new EntityExistsException("User email already existing");

        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setFullName(user.getFullName());
        userRepository.save(newUser);

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
}
