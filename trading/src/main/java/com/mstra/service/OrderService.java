package com.mstra.service;

import com.mstra.domain.OrderType;
import com.mstra.model.Coin;
import com.mstra.model.Order;
import com.mstra.model.OrderItem;
import com.mstra.model.User;

import java.util.List;

public interface OrderService {
    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId) throws Exception;

    List<Order> getAllOrdersOfUser(Long userId, OrderType orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;

}
