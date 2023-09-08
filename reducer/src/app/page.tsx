'use client'

import { listReducer } from "@/reducers/listReducer";
import { useReducer } from "react";

const Page = () =>{
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: 'add',
      payload: {
        text: 'Novo item'
      }
    });
  }

  const toggleItemClick = (id: number) =>{
    dispatch({
      type: 'toggleDone',
      payload: {
        id
      }
    });
  }

  const editItemClick = (id:number, newText: string) =>{
    dispatch({
      type: 'editText',
      payload: {
        id,
        newText
      }
    });
  }

  const removeItemClick = (id: number) =>{
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    });
  }


  return(
    <div className="">
      <button onClick={handleAddClick}></button>
    </div>
  );
}

export default Page;