import { Button } from "@/ui/Button";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/utils/cn";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
async function Home() {
  return (
    <main
      className={cn(
        "flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e3a8a)]",
        font.className
      )}
    >
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">Auth🔐</h1>
        <p className="text-white text-lg text-center">
          A simple Authetication Service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

export default Home;
