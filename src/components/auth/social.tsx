"use client";

import { Button } from "@/ui/Button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FaGithub className="size-5" />
      </Button>
      <Button className="w-full" size="lg" variant="outline" onClick={() => {}}>
        <FcGoogle className="size-5" />
      </Button>
    </div>
  );
};
