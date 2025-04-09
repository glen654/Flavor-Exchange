import { Outlet } from "react-router";
import { Navbar } from "./Navbar/Navbar";

export function RootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
