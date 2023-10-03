import { cn } from "@/lib/utils";
import Image from "next/image";

const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/images/icons/logo-icon.svg"
      width={35}
      height={35}
      alt="logo"
      className={cn("", className)}
    />
  );
};

export default LogoIcon;
