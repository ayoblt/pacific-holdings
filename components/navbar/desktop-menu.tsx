"use client";

import NavItems from "@/components/navbar/nav-items";
import { Search } from "lucide-react";

import { NavItemsProps } from "./route-type";
import LinkButton from "../shared/link-button";
import { usePathname } from "next/navigation";

const DesktopMenu = ({ navRoutes }: NavItemsProps) => {
  const pathname = usePathname();
  const itemsColor = pathname !== "/" ? "text-gray-700" : "";

  return (
    <div className="flex gap-10 md:gap-7 lg:gap-32 items-center h-full max-md:hidden z-50">
      <NavItems navRoutes={navRoutes} itemsColor={itemsColor} />
      <div className="flex gap-5 items-center">
        <div className="flex items-center justify-center bg-black/20 rounded-full w-10 h-10">
          <Search className="h-5 w-5 shrink-0 cursor-pointer" />
        </div>
        <LinkButton href="/contact-us">Get in touch</LinkButton>
      </div>
    </div>
  );
};

export default DesktopMenu;
