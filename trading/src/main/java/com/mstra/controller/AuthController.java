package com.mstra.controller;

import com.mstra.model.User;
import com.mstra.request.ResetPasswordRequest;
import com.mstra.response.APIResponse;
import com.mstra.response.AuthResponse;
import com.mstra.request.ForgotPasswordRequest;
import com.mstra.service.UserServiceImpl;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> register(@RequestBody User user) {
        return  new ResponseEntity<>(userServiceImpl.register(user), HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> login(@RequestBody User user) throws Exception {
        return  new ResponseEntity<>(userServiceImpl.login(user), HttpStatus.ACCEPTED);
    }

    @PostMapping("/two-factor-otp/{otp}")
    public ResponseEntity<AuthResponse> verifySigninOTP(@PathVariable String otp, @RequestParam String id) throws Exception {
        return new ResponseEntity<>(userServiceImpl.verifySigninOTP(otp, id), HttpStatus.ACCEPTED);
    }

    @PostMapping("/users/reset-password/send-otp")
    public ResponseEntity<AuthResponse> sendForgotPasswordOTP(@RequestBody ForgotPasswordRequest request) throws MessagingException {

        return new ResponseEntity<>(userServiceImpl.sendForgotPasswordOTP(request), HttpStatus.OK);
    }

    @PostMapping("users/reset-password/verify-otp")
    public ResponseEntity<APIResponse>  resetPassword(
            @RequestParam String id,
            @RequestHeader("Authorization") String jwt,
            @RequestBody ResetPasswordRequest request) throws Exception {
        return new ResponseEntity<>(userServiceImpl.resetPassword(id, jwt, request), HttpStatus.CREATED);
    }

}
