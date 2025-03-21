package com.mstra.service;

import com.mstra.model.Order;
import com.mstra.model.User;
import com.mstra.model.Wallet;

public interface WalletService {
    Wallet getUserWallet (User user);

    Wallet addBalance(Wallet wallet, Long amount);

    Wallet findWalletById(Long id) throws Exception;

    Wallet walletToWalletTransfer(User sender, Wallet receiver, Long amount) throws Exception;

    Wallet payOrderPayments(Order order, User user) throws Exception;


}
