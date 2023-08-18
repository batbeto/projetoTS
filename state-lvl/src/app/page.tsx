'use client'

import { useState } from "react";

const Page = () =>{
  let [count, setCount] = useState<number>(0);

  const handleClick = () =>{
    setCount(count++);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button className="bg-blue-500 p-3" onClick={handleClick}>+1</button>
    </div>
  );
}


export default Page;