package com.mstra.service;

import com.mstra.domain.VerificationType;
import com.mstra.model.User;
import com.mstra.model.VerificationCode;
import org.springframework.stereotype.Service;

@Service
public interface VerificationCodeService {
    VerificationCode sendVerificationCode(User user, VerificationType verificationType);

    VerificationCode getVerificationCodeById(Long id) throws Exception;

    VerificationCode getVerificationCodeByUser(Long userId);

    void deleteVerificationCode(VerificationCode verificationCode);
}
