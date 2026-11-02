"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { IconBrandGithub} from "@tabler/icons-react";

const LoginGithub = () => {
  return (
    <div
      onClick={() => signIn("github")}
      className="w-full gap-4  hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center"
    >
      <IconBrandGithub className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
};

export default LoginGithub;
