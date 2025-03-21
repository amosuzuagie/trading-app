package com.mstra.request;

import com.mstra.domain.VerificationType;
import lombok.Data;

@Data
public class ForgotPasswordRequest {
    private String sendTo;
    private VerificationType verificationType;
}
