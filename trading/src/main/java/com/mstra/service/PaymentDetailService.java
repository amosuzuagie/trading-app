package com.mstra.service;

import com.mstra.model.PaymentDetails;
import com.mstra.model.User;

public interface PaymentDetailService {
    public PaymentDetails addPaymentDetails(
            String accountNumber,
            String accountHolderName,
            String ifsc,
            String bankName,
            User user);

    public PaymentDetails getUsersPaymentDetails(User user);
}
