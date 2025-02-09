import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Button
      size="lg"
      asChild
      className="w-fit text-base capitalize whitespace-nowrap px-4"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default LinkButton;
