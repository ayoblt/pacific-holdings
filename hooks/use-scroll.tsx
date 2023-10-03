import { ScrollContext } from "@/contexts/scroll-context";
import { useContext } from "react";

export const useScroll = () => {
  return useContext(ScrollContext);
};
