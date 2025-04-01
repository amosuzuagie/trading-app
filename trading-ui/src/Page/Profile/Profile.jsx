import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import AccountVerificationForm from "./AccountVerificationForm";

const Profile = () => {
  const handleEnableTwoStepVerification = () => {
    console.log("Two Step Verification");
  };

  // const handleSubmit = () => {}

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Informations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email</p>
                  <p className="text-gray-500">Mstr A</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name</p>
                  <p className="text-gray-500">Mstr Amos</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date Of Birth</p>
                  <p className="text-gray-500">12th May, 1995</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality</p>
                  <p className="text-gray-500">Nigerian</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address</p>
                  <p className="text-gray-500">9089, Banana Island, Lagos</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City</p>
                  <p className="text-gray-500">Lagos City</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Postcode</p>
                  <p className="text-gray-500">106104</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country</p>
                  <p className="text-gray-500">Nigeria</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true ? (
                  <Badge className="space-x-2 text-white bg-green-600">
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enable Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify Your Account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm
                      handleSubmit={handleEnableTwoStepVerification}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
