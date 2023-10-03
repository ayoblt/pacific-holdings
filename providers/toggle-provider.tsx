"use client";

import { ToggleContext } from "@/contexts/toggle-context";
import { ReactNode, useState } from "react";

export const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <ToggleContext.Provider value={{ isOpen, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
