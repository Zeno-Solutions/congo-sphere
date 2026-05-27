import { ReactNode } from "react";
import { redirect } from "next/navigation";
type User = {
  name: string;
  password: string;
};
type AuthProps = {
  children: ReactNode;
};

export default function Auth({ children }: AuthProps) {
  const User: User = {
    name: "martial",
    password: "Azerty",
  };
  const User2: User = {
    name: "martial",
    password: "Azerty",
  };

  if (User) {
    return children;
  } else {
    console.log("User not authenticated");
    redirect("/login");
  }
}
