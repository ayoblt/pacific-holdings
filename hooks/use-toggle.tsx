import { useContext } from "react";
import { ToggleContext } from "@/contexts/toggle-context";
import { ToggleContextType } from "@/contexts/toggle-context";

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (context === undefined)
    throw new Error("useToggle must be used within a ToggleProvider");
  return context;
};
