import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import LogoIcon from "../shared/logo";

import { useScroll } from "@/hooks/use-scroll";
import { useToggle } from "@/hooks/use-toggle";
import { usePathname } from "next/navigation";

const Brand = () => {
  const scrolling = useScroll();
  const { isOpen } = useToggle();
  const pathname = usePathname();

  const brandClass =
    pathname !== "/"
      ? "text-black"
      : scrolling
      ? "text-black"
      : isOpen
      ? "text-black"
      : "text-white";

  return (
    <Button
      asChild
      className={`rounded-none h-12 uppercase font-bold text-sm md:text-xs bg-transparent shadow-none px-2 hover:bg-white hover:text-black whitespace-nowrap ${brandClass}`}
    >
      <Link href="/">
        <LogoIcon className="mr-2 h-6 w-6" /> Pacific Holdings
      </Link>
    </Button>
  );
};

export default Brand;
