"use client";

import { useToggle } from "@/hooks/use-toggle";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Dropdownitems {
  title: string;
  path?: string;
  subRoutes?: Dropdownitems[];
}

interface NavDropdownProps {
  title: string;
  itemsColor?: string;
  navItemsClass: string;
  subRoutes: Dropdownitems[];
}

const NewDropDown = ({
  title,
  itemsColor,
  navItemsClass,
  subRoutes,
}: NavDropdownProps) => {
  const { handleToggle } = useToggle();

  return (
    <div className="relative">
      <Button
        variant="link"
        className={cn(
          `group/main max-md:relative uppercase text-sm transition p-0 font-semibold ${navItemsClass}`,
          itemsColor
        )}
      >
        {title}
        <SubLinks className="top-full left-1/2 md:-translate-x-1/2 group-hover/main:scale-100 group-hover/main:opacity-100 text-gray-800">
          {subRoutes.map((route) => (
            <React.Fragment key={route.title}>
              {route.path && (
                <li className="relative group/sub">
                  {route.subRoutes ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          href={route.path}
                          className=" w-full transition duration-300 hover:bg-green-600 hover:text-white p-2 rounded"
                        >
                          {route.title}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <SubLinks className="top-1/2 left-full group-hover/sub:scale-100 group-hover/sub:opacity-100">
                        {route.subRoutes.map((route) => (
                          <React.Fragment key={route.title}>
                            {route.path && (
                              <li>
                                <Link
                                  href={route.path}
                                  className="flex items-center justify-between w-full transition duration-300 hover:bg-green-600 hover:text-white p-2 rounded"
                                >
                                  {route.title}
                                </Link>
                              </li>
                            )}
                          </React.Fragment>
                        ))}
                      </SubLinks>
                      {/* <ul className="absolute left-full rounded-md backdrop-blur-lg bg-white shadow-md p-3 drop-shadow-xl border top-1/2">
                    
                  </ul> */}
                    </>
                  ) : (
                    <Link
                      href={route.path}
                      className="flex items-center justify-between w-full transition duration-300 hover:bg-green-600 hover:text-white p-2 rounded"
                    >
                      {route.title}
                    </Link>
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </SubLinks>
      </Button>
    </div>
  );
};

export const SubLinks = ({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <ul
      className={cn(
        "absolute bg-white shadow-md rounded-md p-3 drop-shadow-xl border transition scale-0 opacity-0 origin-top capitalize",
        className
      )}
    >
      {children}
    </ul>
  );
};

export default NewDropDown;
