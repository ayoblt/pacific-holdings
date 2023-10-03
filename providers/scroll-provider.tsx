"use client";

import { ScrollContext } from "@/contexts/scroll-context";
import { useEffect, useState } from "react";

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrolling}>
      {children}
    </ScrollContext.Provider>
  );
};
