"use client";

import NavLogo from "./NavLogo";
import NavList from "./NavList";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <nav className="flex items-center justify-between h-[120px] w-11/12 mx-auto">
      <NavLogo />

      <NavList mobileActive={mobileActive} />

      <span className="relative z-40 block lg:hidden">
        <Hamburger toggled={mobileActive} toggle={setMobileActive} size={20} />
      </span>

      <div
        onClick={() => {
          setMobileActive(false);
        }}
        className={clsx(
          "absolute z-20 top-0 bg-black bg-opacity-40 ease-in-out w-full h-full",
          mobileActive ? "left-0" : "-left-full"
        )}
      />
    </nav>
  );
};

export default Navbar;
