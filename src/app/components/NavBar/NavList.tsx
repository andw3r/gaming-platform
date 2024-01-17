"use client";

import clsx from "clsx";
import NavButton from "./NavButton";
import NavItem from "./NavItem";

interface NavListProps {
  mobileActive: boolean;
}

const NavList = ({ mobileActive }: NavListProps) => {
  const navList = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "About us", href: "/about" },
    { id: 3, text: "Services", href: "/services" },
    { id: 4, text: "News", href: "/news" },
    { id: 4, text: "Contact us", href: "/contact" },
  ];

  return (
    <div
      className={clsx(
        "absolute z-30 lg:static top-0  flex items-center bg-slate-500 lg:bg-transparent ease-in-out duration-500",
        mobileActive ? "left-0" : "-left-full"
      )}
    >
      <ul className="flex flex-col lg:flex-row gap-10 lg:gap-[88px] p-14 lg:mr-[35px]">
        {navList.map((item) => (
          <NavItem key={item.id} text={item.text} href={item.href} />
        ))}
      </ul>
      <NavButton href="/contact" />
    </div>
  );
};

export default NavList;
