"use client";

import { createContext, useContext, useEffect, useState } from "react";

type MenuColumns = 1 | 2;

interface MenuLayoutContextValue {
  columns: MenuColumns;
  setColumns: (columns: MenuColumns) => void;
}

const STORAGE_KEY = "menu-columns";

const MenuLayoutContext = createContext<MenuLayoutContextValue | null>(null);

export function MenuLayoutProvider({ children }: { children: React.ReactNode }) {
  const [columns, setColumnsState] = useState<MenuColumns>(1);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "1" || stored === "2") {
      setColumnsState(Number(stored) as MenuColumns);
    }
  }, []);

  function setColumns(value: MenuColumns) {
    setColumnsState(value);
    window.localStorage.setItem(STORAGE_KEY, String(value));
  }

  return (
    <MenuLayoutContext.Provider value={{ columns, setColumns }}>
      {children}
    </MenuLayoutContext.Provider>
  );
}

export function useMenuLayout() {
  const context = useContext(MenuLayoutContext);
  if (!context) {
    throw new Error("useMenuLayout должен использоваться внутри MenuLayoutProvider");
  }
  return context;
}