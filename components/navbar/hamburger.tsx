"use client";

import { useScroll } from "@/hooks/use-scroll";
import { useToggle } from "@/hooks/use-toggle";
import { usePathname } from "next/navigation";
// {
//   onToggle,
//   isOpen,
// }: {
//   onToggle: () => void;
//   isOpen: boolean;
// }
export default function Hamburger() {
  const scrolling = useScroll();
  const { isOpen, handleToggle } = useToggle();
  const pathname = usePathname();

  const hamburgerClass =
    pathname !== "/"
      ? "bg-black"
      : scrolling
      ? "bg-black"
      : isOpen
      ? "bg-black"
      : "bg-white";
  return (
    <div
      className="flex md:hidden flex-col gap-1 items-end relative cursor-pointer"
      onClick={handleToggle}
    >
      <span
        className={`w-6 h-1 rounded-full transition duration-300 ${hamburgerClass} ${
          isOpen
            ? "rotate-45 -translate-y-1/2 absolute left-1/2 -translate-x-1/2 top-1/2 "
            : "rotate-0"
        }`}
      ></span>
      <span
        className={`w-8 h-1 rounded-full transition-all duration-500 ${hamburgerClass} ${
          !isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      ></span>
      <span
        className={`w-6 h-1 rounded-full transition duration-300 ${hamburgerClass} ${
          isOpen
            ? "-rotate-45 translate-y-1/2 right-1/2 translate-x-1/2 bottom-1/2 absolute "
            : "-rotate-0"
        }`}
      ></span>
    </div>
  );
}
