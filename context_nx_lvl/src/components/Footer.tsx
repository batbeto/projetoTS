import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const Footer = () => {
  const postCtx = useContext(PostContext);
  return(
    <div>
      Total de POSTs: {postCtx?.posts.length}
    </div>
  );
}