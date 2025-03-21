package com.mstra.controller;

import com.mstra.model.PaymentDetails;
import com.mstra.model.User;
import com.mstra.service.PaymentDetailService;
import com.mstra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentDetailsController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentDetailService paymentDetailService;

    @PostMapping("/payment-details")
    public ResponseEntity<PaymentDetails> addPaymentDetails(@RequestBody PaymentDetails request, @RequestHeader("Authorization") String jwt)throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        PaymentDetails paymentDetails = paymentDetailService.addPaymentDetails(
                request.getAccountNumber(),
                request.getAccountHolderName(),
                request.getIfsc(),
                request.getBankName(),
                user
        );
        return new ResponseEntity<>(paymentDetails, HttpStatus.CREATED);
    }

    @GetMapping("/payment-details")
    public ResponseEntity<PaymentDetails> getUserPaymentDetails(@RequestHeader("Authorization") String jwt) {
        User user = userService.findUserProfileByJwt(jwt);

        PaymentDetails paymentDetails = paymentDetailService.getUsersPaymentDetails(user);
        return  new ResponseEntity<>(paymentDetails, HttpStatus.OK);
    }
}
