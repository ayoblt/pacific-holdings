import { ToggleContext, ToggleContextType } from "@/contexts/toggle-context";
import { useContext } from "react";

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (context === undefined)
    throw new Error("useToggle must be used within a ToggleProvider");
  return context;
};
