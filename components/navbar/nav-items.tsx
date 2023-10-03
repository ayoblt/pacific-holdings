import Link from "next/link";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import NewDropDown from "./new-dropdown";
import { NavItemsProps } from "./route-type";

interface NavItemsMainProps extends NavItemsProps {
  itemsColor?: string;
  handleToggle?: () => void;
}

const NavItems = ({
  navRoutes,
  itemsColor,
  handleToggle,
}: NavItemsMainProps) => {
  const scrolling = useScroll();

  const NavItemsClass = scrolling ? "text-gray-700" : "text-white";
  return (
    <ul
      className={cn(
        `flex flex-col md:flex-row gap-8 md:gap-5 uppercase text-xs lg:text-sm md:items-center font-bold pt-5 md:p-0 whitespace-nowrap ${NavItemsClass}`,
        itemsColor
      )}
    >
      {navRoutes.map((route) => (
        <li key={route.title}>
          {route.subRoutes ? (
            <NewDropDown
              title={route.title}
              handleToggle={handleToggle}
              subRoutes={route.subRoutes}
              itemsColor={itemsColor}
              navItemsClass={NavItemsClass}
            />
          ) : (
            <Link
              href={route.path || "#"}
              onClick={handleToggle}
              className="hover:underline underline-offset-4"
            >
              {route.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
