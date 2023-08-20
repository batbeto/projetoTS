'use client'

import { Person } from "@/types/Person";
import { useState } from "react";

const Page = () =>{
  let [count, setCount] = useState<number>(0);
  let [secret, setSecret] = useState<boolean>(false)
  const [nameImput, setNameImput] = useState('');
  const [fullName, setFullName] = useState<Person>(
    {
      name: '',
      lastName: ''
    }
  );

  const handleClick = () =>{
    setCount(++count);
    setSecret(!secret);
    
  };

  const handleClearButton = () => {
    setCount(0);
    setFullName({
      name:'',
      lastName: ''
    });
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button className="bg-blue-500 p-3" onClick={handleClick}>{!secret ? 'Mostrar' : 'Ocultar'}</button>
      {secret &&
        <div className="p-1 bg-blue-300 rounded-md mt-3">Área secreta</div>
      }
      <input 
        type="text" 
        className="border border-black p-3 text-xl text-black"
        placeholder="Digite seu nome" 
        value={nameImput}
        onChange={(e)=>setNameImput(e.target.value)}
      />  
      <button 
        onClick={()=>{return setCount(count+2)}}
        className="bg-yellow-700 text-white rounded-md p-3"
      >+2</button>
      <input 
        type="text"
        placeholder="Nome" 
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        onChange={e => setFullName({...fullName, name: e.target.value})}
      />
      <input 
        type="text"
        placeholder="Sobrenome" 
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setFullName({...fullName, lastName: e.target.value})}
      />        
      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button onClick={handleClearButton}>Limpar tudo</button>
    </div>
  );
}

export default Page;