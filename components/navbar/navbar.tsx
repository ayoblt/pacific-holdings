"use client";

import Hamburger from "./hamburger";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useScroll } from "@/hooks/use-scroll";
import { useToggle } from "@/hooks/use-toggle";

import { NavRoutes } from "@/data/nav-routes";
import Brand from "./brand";

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, handleToggle } = useToggle();
  const scrolling = useScroll();
  const pathname = usePathname();

  useEffect(
    function () {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    [isOpen]
  );

  return (
    <>
      <nav
        className={`${
          pathname !== "/" ? "bg-white sticky top-0" : "bg-transparent fixed"
        } w-full px-8 h-20 md:text-white z-[999] ${
          scrolling
            ? "bg-white shadow-md"
            : isOpen
            ? "bg-white"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-full w-full">
          <Brand />
          <Hamburger />
          {!isOpen ? (
            <DesktopMenu navRoutes={NavRoutes} />
          ) : (
            <MobileMenu navRoutes={NavRoutes} />
          )}
        </div>
      </nav>
    </>
  );
}
