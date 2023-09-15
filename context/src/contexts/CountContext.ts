import { createContext } from "react";

type CountContentType = {
  onlineCount: number;
  setOnlineCount: (n: number)=>void;
}

export const CountContext = createContext<CountContentType | null>(null);