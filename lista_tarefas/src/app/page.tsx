'use client'

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () =>{
  const [itemInput, setItemInput] =  useState('');
  const [list, setList] = useState<TodoItem[]>([
    {label: 'Fazer dever de casa', checked: false},
    {label: 'Comprar o bolo', checked: false}
  ]);
  
  const handleAddButton = () =>{
    if(itemInput.trim() == '') return;
    setList([
      ...list,
      {label: itemInput, checked: false}
    ]);
    setItemInput('');
  };

  const deleteItem = (index: number) =>{
    setList(list.filter((item, key) => key != index));
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <h1 className="text-4xl mt-5">Lista de tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">
        <input 
          type="text"
          placeholder="O que deseja fazer?" 
          className="border border-black p-3 text-2xl text-black rounded-md mb-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>
      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
           <li key={index}>{item.label} - <button className="hover:underline" onClick={()=>deleteItem(index)}>[ Deletar ]</button></li> 
        ))}
      </ul>      
    </div>
  );
}

export default Page;