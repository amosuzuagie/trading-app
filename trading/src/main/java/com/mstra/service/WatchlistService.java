package com.mstra.service;

import com.mstra.model.Coin;
import com.mstra.model.User;
import com.mstra.model.Watchlist;

public interface WatchlistService {
    Watchlist findUserWatchList(Long userId) throws Exception;

    Watchlist createWatchList(User user);

    Watchlist findById(Long id) throws Exception;

    Coin addItemToWatchList(Coin coin, User user) throws Exception;
}
