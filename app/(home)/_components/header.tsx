import LinkButton from "@/components/shared/link-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <section className="px-8 bg-hero min-h-[80vh] bg-cover w-full bg-bottom bg-no-repeat bg-blend-darken bg-black bg-opacity-60 flex items-center">
      <div className="flex flex-col gap-4 md:w-2/3 lg:w-1/2">
        <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl text-white font-semibold">
          Welcome to pacific holdings limited
        </h1>
        <LinkButton href="/about-us">About us</LinkButton>
      </div>
    </section>
  );
};

export default Header;
