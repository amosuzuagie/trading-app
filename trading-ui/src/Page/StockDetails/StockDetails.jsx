import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import React from "react";
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
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
        <div className="flex items-center gap-4">
          <Button className="w-12 cursor-pointer">
            {true ? (
              <BookmarkFilledIcon className="h-6 w-8" />
            ) : (
              <BookmarkIcon className="h-6 w-8" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button className={"cursor-pointer"} size="lg">
                Tread
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-14  h-[50%]">
        <StockChart />
      </div>
    </div>
  );
};

export default StockDetails;
