package com.mstra.service;

import com.mstra.domain.VerificationType;
import com.mstra.model.ForgotPasswordToken;
import com.mstra.model.User;

public interface ForgotPasswordService {

    ForgotPasswordToken createToken (
            User user,
            String id, String otp,
            VerificationType verificationType,
            String sendTo
    );

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);
}
