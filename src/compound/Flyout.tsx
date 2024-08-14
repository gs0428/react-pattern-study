import { createContext, useState, useContext, SetStateAction, Dispatch } from "react";

const FlyOutContext = createContext<{ open: boolean; toggle: Dispatch<SetStateAction<boolean>> } | null>(null);

export default function FlyOut({ children }: { children: React.ReactNode }) {
  const [open, toggle] = useState(false);

  return <FlyOutContext.Provider value={{ open, toggle }}>{children}</FlyOutContext.Provider>;
}

function Toggle() {
  const flyoutContext = useContext(FlyOutContext);
  const { open, toggle } = flyoutContext || { open: false, toggle: () => {} };

  return <button onClick={() => toggle(!open)}>{open ? "Close" : "Open"} FlyOut</button>;
}

FlyOut.Toggle = Toggle;
