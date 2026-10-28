import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
const AuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className={`${
        pending ? "bg-blue-600" : "bg-black"
      } relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]`}
    >
      {pending ? "Loading..." : "Sign in"
      }
    </Button>
  );
};

export default AuthButton;
