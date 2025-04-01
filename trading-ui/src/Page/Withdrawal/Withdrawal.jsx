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

const Withdrawal = () => {
  return (
    <div className="lg:p-20 p-5">
      <h1 className="font-bold text-3xl pb-5">Withdrawals</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-7">DATE</TableHead>
            <TableHead>METHOS</TableHead>
            <TableHead>AMOUNT</TableHead>
            <TableHead>STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <p>2025/03/28</p>
                </TableCell>
                <TableCell>$86867.666</TableCell>
                <TableCell>$86867.666</TableCell>
                <TableCell>-0.20009</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
