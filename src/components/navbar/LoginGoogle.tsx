"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { IconBrandGoogle } from "@tabler/icons-react";

const LoginGoogle = () => {
  return (
    <div
      onClick={() => signIn("google")}
      className="w-full gap-4  hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center"
    >
      <IconBrandGoogle className="text-white" />
      <p className="text-white">Login with Google</p>
    </div>
  );
};

export default LoginGoogle;
