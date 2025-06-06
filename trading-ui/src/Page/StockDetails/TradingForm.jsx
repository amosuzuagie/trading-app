import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const TradingForm = () => {
  const [orderType, setOrderType] = useState("BUY");

  const handleChange = () => {};
  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Enter Amount"
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="flex items-center border text-2xl justify-center w-36  h-14 rounded-md">
              4563
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-500 text-center pt-4">
            Insufficient ballance to buy
          </h1>
        )}
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage
              src={
                "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
              }
            />
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>BTC</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">Bitcoin</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">$6554</p>
            <p className="text-red-500">
              <span>-14322345.756</span>
              <span>(-0.28908%)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>

      <div className="flex items-center justify-between">
        <p>{orderType == "BUY" ? "Available Cash" : "Availble Quantity"}</p>
        <p>{orderType == "BUY" ? 9000 : 23.08}</p>
      </div>

      <div>
        <Button
          className={`w-full py-6 ${
            orderType == "SELL" ? "bg-red-600 text-white" : ""
          } cursor-pointer`}
        >
          {orderType}
        </Button>
        <Button
          variant="link"
          className="w-full mt-5 text-xl cursor-pointer"
          onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}
        >
          {orderType == "BU" ? "or Sell" : "or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TradingForm;
