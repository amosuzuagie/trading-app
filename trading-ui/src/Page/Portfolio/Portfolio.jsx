import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Portfolio = () => {
  return (
    <div className="lg:p-20 p-5">
      <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
      <Table className="border-x">
        <TableHeader>
          <TableRow>
            <TableHead className="">ASSETS</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>UNITS</TableHead>
            <TableHead>CHANGE</TableHead>
            <TableHead>CHANGE %</TableHead>
            <TableHead>VOLUME</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="z-50 ">
                    <AvatarImage
                      src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                      alt="..."
                    />
                    <span>Bitcoin</span>
                  </Avatar>
                </TableCell>
                <TableCell>BTC</TableCell>
                <TableCell>9124463121</TableCell>
                <TableCell>1364881428323</TableCell>
                <TableCell>-0.20009</TableCell>
                <TableCell>$86867.666</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
