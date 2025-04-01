// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./Page/Home/Home";
import Navbar from "./Page/Navbar/Navbar";
import Portfolio from "./Page/Portfolio/Portfolio";
import Activity from "./Page/Activity/Activity";
import Wallet from "./Page/Wallet/Wallet";
import PaymentDetails from "./Page/PaymentDetails/PaymentDetails";
import Withdrawal from "./Page/Withdrawal/Withdrawal";
import Profile from "./Page/Profile/Profile";
import StockDetails from "./Page/StockDetails/StockDetails";
import Watchlist from "./Page/Watchlist/Watchlist";
import SearchCoin from "./Page/Search/SearchCoin";
import Notfound from "./Page/Notfound/Notfound";
import Auth from "./Page/Auth/Auth";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Auth />
        {false && (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/payment-details" element={<PaymentDetails />} />
              <Route path="/withdrawal" element={<Withdrawal />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/market/:id" element={<StockDetails />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/search" element={<SearchCoin />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
