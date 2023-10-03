import { createContext } from "react";

export interface ToggleContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

export const ToggleContext = createContext<ToggleContextType | undefined>(
  undefined
);
