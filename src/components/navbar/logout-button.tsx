"use client";
import {  LogOut} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleClick = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/",
      
    });
  };

  return <Button onClick={handleClick}> <LogOut className="mr-2 h-4 w-4" /> Sign Out</Button>;
};
export default LogoutButton;
