import { ReactNode } from "react";
import { redirect } from "next/navigation";
type User = {
  name: string;
  password: string;
  session: number;
};
type AuthProps = {
  children: ReactNode;
};

export default function Auth({ children }: AuthProps) {
  const User: User = {
    name: "martial",
    password: "Azerty",
    session: 2,
  };
  const User2: User = {
    name: "martial",
    password: "Azerty",
    session: 2,
  };

  if (User == User2) {
    return children;
  } else {
    redirect("/login");
  }
}
