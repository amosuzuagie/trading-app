package com.mstra.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Async
    public void sendVerificationOTPEmail(String email, String otp) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message, "utf-8");

        String subject = "Verify OTP";
        String text = "Your verification code is " + otp;

        messageHelper.setSubject(subject);
        messageHelper.setText(text);
        messageHelper.setTo(email);
        try {
            mailSender.send(message);
        } catch (MailException e) {
            throw new MailSendException(e.getMessage());
        }
    }
}
