import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

interface Dropdownitems {
  title: string;
  path?: string;
  subRoutes?: Dropdownitems[];
}

interface NavDropdownProps {
  title: string;
  subRoutes: Dropdownitems[];
}

export function NavDropdown({ title, subRoutes }: NavDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="uppercase flex items-center gap-1">
        {title} <ChevronDownIcon className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className="w-56 z-[999]">
          <DropdownMenuGroup>
            {subRoutes.map((route) => (
              <React.Fragment key={route.title}>
                {route.subRoutes ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {route.path && (
                        <Link href={route.path}>{route.title}</Link>
                      )}
                      {/* <Link href={route.path}
                      {route.title} */}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="z-[999]">
                        {route.subRoutes.map((route) => (
                          <DropdownMenuItem key={route.title}>
                            {route.path && (
                              <Link href={route.path}>{route.title}</Link>
                            )}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem>
                    {route.path && <Link href={route.path}>{route.title}</Link>}
                  </DropdownMenuItem>
                )}
                {/* {route.path && } */}
              </React.Fragment>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
