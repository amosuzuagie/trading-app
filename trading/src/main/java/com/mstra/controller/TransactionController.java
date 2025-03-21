package com.mstra.controller;

import com.mstra.model.User;
import com.mstra.model.Wallet;
import com.mstra.model.WalletTransaction;
import com.mstra.service.UserService;
import com.mstra.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class TransactionController {

    @Autowired
    private UserService userService;

    @Autowired
    private WalletService walletService;



    @GetMapping("transactions")
    public ResponseEntity<List<WalletTransaction>> getUserWallet(@RequestHeader("Authorization") String jwt) {
        User user = userService.findUserProfileByJwt(jwt);

        Wallet wallet = walletService.getUserWallet(user);
        return null;
    }
}
