import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Activity = () => {
  return (
    <div className="lg:p-20 p-5">
      <h1 className="font-bold text-3xl pb-5">Activities</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-7">DATE & TIME</TableHead>
            <TableHead>TRADING PAIR</TableHead>
            <TableHead>BUY PRCE</TableHead>
            <TableHead>SELLING PRICE</TableHead>
            <TableHead>ORDER TYPE</TableHead>
            <TableHead>PROFIT/LOST</TableHead>
            <TableHead className="">VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <p>2025/03/28</p>
                  <p className="text-gray-400">11:15:32</p>
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="z-50 ">
                    <AvatarImage
                      src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                      alt="..."
                    />
                    <span>Bitcoin</span>
                  </Avatar>
                </TableCell>
                <TableCell>$86867.666</TableCell>
                <TableCell>$86867.666</TableCell>
                <TableCell>-0.20009</TableCell>
                <TableCell>$69249</TableCell>
                <TableCell>345</TableCell>
                {/* <TableCell>
                  <Button
                    variant="autline"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => handleRemoveFromWatchlist(item.id)}
                  >
                    <BookmarkFilledIcon className="w-6 h-5" />
                  </Button>
                </TableCell> */}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
