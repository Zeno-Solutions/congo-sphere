import { ReactNode } from "react";
import Auth from "../(users)/libs/Auth";
import { redirect } from "next/navigation";
export default function Layout({ children }: { children: ReactNode }) {
  const isLogin: boolean = Auth();

  if (isLogin) {
    redirect("/dashboard");
  } else {
    return <div>{children}</div>;
  }
}
