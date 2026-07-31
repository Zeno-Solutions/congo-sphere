import { ReactNode } from "react";
import Auth from "./libs/Auth";
import { redirect } from "next/navigation";
export default function Layout({ children }: { children: ReactNode }) {
  const isLogin: boolean = Auth();

  if (isLogin) {
    return <div>{children}</div>;
  } else {
    console.log("User not authenticated");
    redirect("/login");
  }
}
