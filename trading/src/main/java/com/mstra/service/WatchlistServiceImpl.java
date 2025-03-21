package com.mstra.service;

import com.mstra.model.Coin;
import com.mstra.model.User;
import com.mstra.model.Watchlist;
import com.mstra.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WatchlistServiceImpl implements WatchlistService {

    @Autowired
    private WatchlistRepository watchListRepository;

    @Override
    public Watchlist findUserWatchList(Long userId) throws Exception {
        Watchlist watchList = watchListRepository.findByUserId(userId);
        if (watchList == null) throw new Exception("Watchlist not found");
        return watchList;
    }

    @Override
    public Watchlist createWatchList(User user) {
        Watchlist watchlist = new Watchlist();
        watchlist.setUser(user);

        return watchListRepository.save(watchlist);
    }

    @Override
    public Watchlist findById(Long id) throws Exception {
        Optional<Watchlist> watchlist = watchListRepository.findById(id);
        return watchlist.orElseThrow(()-> new Exception("Watchlist not found"));
    }

    @Override
    public Coin addItemToWatchList(Coin coin, User user) throws Exception {
        Watchlist watchlist = findUserWatchList(user.getId());
        if (watchlist.getCoins().contains(coin)) {
            watchlist.getCoins().remove(coin);
        } else {
            watchlist.getCoins().add(coin);
        }
        watchListRepository.save(watchlist);
        return coin;
    }
}
