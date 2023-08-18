'use client'

import { useState } from "react";

const Page = () =>{
  let [count, setCount] = useState<number>(0);
  let [secret, setSecret] = useState<boolean>(false)

  const handleClick = () =>{
    setCount(count++);
    if(secret){
      setSecret(false);
    } else{
      setSecret(true);
    }
    
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button className="bg-blue-500 p-3" onClick={handleClick}>+1</button>
      {secret &&
        <div className="p-1 bg-blue-300 rounded-md mt-3">Área secreta</div>
      }      
    </div>
  );
}


export default Page;