import { Item } from "@/types/Item";

type AddAction = {
  type: 'add';
  payload: { 
    text:string 
  };
}

type EditTextAction = {
  type: 'editText';
  payload: {
    id: number;
    newText: string;
  }
}

type toggleDoneAction = {
  type: 'toggleDone';
  payload: {
    id: number;
  };
}

type removeAction = {
  type: 'remove';
  payload: {
    id: number;
  };
}

type listActions = AddAction | EditTextAction | toggleDoneAction | removeAction;

export const listReducer = (list: Item[], action: listActions ) => {
  switch (action.type) {
    case 'add':
      return [...list, {
        id: list.length,
        text: action.payload.text,
        done: false
      }]
      break;
    case 'editText':
      return list.map(t => {
        if (t.id === action.payload.id) {
          t.text = action.payload.newText;
        }
        return t;
      });
      break;
    case 'toggleDone':
      return list.map( t => {
        if(t.id === action.payload.id){
          t.done = !t.done;
        }
        return t;
      });
      break;
    case 'remove':
      return list.filter( t =>{
        t.id === action.payload.id;
      });
      break;
    default:
      return list;
      break;
  }
}