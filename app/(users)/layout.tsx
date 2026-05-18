import { ReactNode } from "react";
import Auth from "./libs/Auth";

export default function UserLayout({ children }: { children: ReactNode }) {
  return <Auth>{children}</Auth>;
}
