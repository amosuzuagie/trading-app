import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const TransferForm = () => {
  const [FormData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(FormData);
  };

  return (
    <div className="pt-10 space-y-5 ">
      <div>
        <h1>Enter Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={FormData.amount}
          className="py-7"
          placeholder="$99999"
        />
      </div>
      <div>
        <h1>Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={FormData.walletId}
          className="py-7"
          placeholder="#ADER455"
        />
      </div>
      <div>
        <h1>Enter Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={FormData.purpose}
          className="py-7"
          placeholder="Gift a freind"
        />
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
