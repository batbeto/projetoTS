import { useEffect } from "react";

export const Square = () =>{

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      console.log('Quadradooooo')
    });
    
    return ()=>{
      window.removeEventListener('scroll',()=>{
        console.log('Rodou o clean UP');
      });      
    }
  });

  return (
    <div className="w-40 h-40 bg-red-400">

    </div>
  );
}