'use client'
import { VideoPlayer } from "@/components/VideosPlayer";
import { useEffect, useState } from "react";

const Page = () => {
  const [playing, setPlaying] = useState(false);

  return(
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-red-400 mb-3">{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className="p-3 bg-blue-800 text-white rounded-md" onClick={()=>setPlaying(!playing)}>Play/Pause</button>
      </div>
      <VideoPlayer 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />

    </div>
  );
}



export default Page;