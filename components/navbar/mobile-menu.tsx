"use client";

import { useToggle } from "@/hooks/use-toggle";
import { Button } from "../ui/button";
import NavItems from "./nav-items";
import { NavItemsProps } from "./route-type";
import SearchInput from "./search-input";

const MobileMenu = ({ navRoutes }: NavItemsProps) => {
  const itemsColor = "text-gray-700";
  const { handleToggle } = useToggle();

  return (
    <div className="h-full w-full md:hidden fixed bottom-0 top-20 inset-x-0 bg-white p-6 z-50">
      <div className="flex flex-col divide-y gap-5">
        <SearchInput className="w-full" />
        <NavItems
          navRoutes={navRoutes}
          itemsColor={itemsColor}
          handleToggle={handleToggle}
        />
        <div className="pt-5 w-full">
          <Button size="lg" className="capitalize text-base text-white w-full">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
