import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Guest = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-center overflow-hidden bg-gray-800">
      <div className="w-full sm:w-4/5 md:w-1/3 mx-auto px-4 py-6">
        <h1 className="text-slate-200 text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
          Log in to enter the guest area
        </h1>
        <SignInButton>
          <Button className="w-full py-4 text-lg bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Log in
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Guest;
