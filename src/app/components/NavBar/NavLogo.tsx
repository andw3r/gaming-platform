"use client";
import logo from "@/app/assets/img/logo.svg";
import Image from "next/image";

const NavLogo = () => {
  return (
    <header>
      <Image alt="logo" src={logo} />
    </header>
  );
};

export default NavLogo;
