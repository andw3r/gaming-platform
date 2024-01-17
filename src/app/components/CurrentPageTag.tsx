"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";

const CurrentPageTag = () => {
  const pathname = usePathname();
  const pagesList = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About us", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "News", href: "/news" },
    { id: 4, name: "Contact us", href: "/contact" },
  ];

  const currentPage = pagesList.find((page) => page.href === pathname);

  return (
    <div className="flex leading-[33.36px] items-center">
      <Link href="/" className="pr-3">
        Home
      </Link>
      <span>
        <FaChevronRight className="text-xs" />
      </span>
      <span className="text-amber-600 ml-1">{currentPage?.name}</span>
    </div>
  );
};

export default CurrentPageTag;
