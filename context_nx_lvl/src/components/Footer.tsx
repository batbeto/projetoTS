import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
  const postCtx = usePosts();
  return(
    <div>
      Total de POSTs: {postCtx?.posts.length}
    </div>
  );
}