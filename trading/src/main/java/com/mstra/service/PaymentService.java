package com.mstra.service;

import com.mstra.model.PaymentMethod;
import com.mstra.model.PaymentOrder;
import com.mstra.model.User;
import com.mstra.response.PaymentResponse;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

public interface PaymentService {
    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user, Long amount, Long orderId) throws RazorpayException;

    PaymentResponse createStripPaymentLink(User user, Long amount, Long orderId) throws StripeException;
}
