import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {
  const count = useContext(CountContext);

  const handleBanAll = () => {
    count?.setOnlineCount(0);
  }

  return(
    <>
        <p>Online: {count?.onlineCount}</p>
        <button onClick={handleBanAll}>Ban all</button>
    </>
  );
}