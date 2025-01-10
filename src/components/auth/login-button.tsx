"use client";

import { useRouter } from "next/navigation";
interface loginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: loginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <span>TODO: implement Modal</span>;
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
