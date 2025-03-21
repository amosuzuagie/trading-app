package com.mstra.repository;

import com.mstra.model.TwoFactorOTP;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TwoFactorOTPRepository extends JpaRepository<TwoFactorOTP, String > {
    TwoFactorOTP findByUserId(Long userId);
}
