package com.mstra.service;

import com.mstra.domain.VerificationType;
import com.mstra.model.User;

public interface UserService {
    public User findUserProfileByJwt(String jwt);
    public User findUserByEmail(String email);
    public User findUserById(Long userId) throws Exception;

    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo, User user);
    public User updatePassword(User user, String newPassword);
}
