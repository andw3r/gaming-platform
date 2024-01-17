"use client";
import Link from "next/link";

interface NavButtonProps {
  href: string;
}

const NavButton = ({ href }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className="text-sm px-7 py-2.5 bg-mainOrange rounded-md hidden lg:block"
    >
      Contact us
    </Link>
  );
};

export default NavButton;
