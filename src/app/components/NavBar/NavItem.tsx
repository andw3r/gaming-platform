"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem = ({ text, href }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <li className="relative lg:last:hidden text-2xl lg:text-base">
      <Link href={href}>{text}</Link>
      {pathname == href && (
        <div className="hidden lg:flex absolute -left-[15%] mt-1">
          <span className="w-8 h-1 rounded-3xl bg-activeLink mr-0.5"></span>
          <span className="w-1 h-1 rounded-3xl bg-activeLink"></span>
        </div>
      )}
    </li>
  );
};

export default NavItem;
