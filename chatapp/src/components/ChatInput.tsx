import { useChat } from "@/contexts/ChatContext";
import { useState, KeyboardEvent } from "react";

type Props = {
    name: string
}

export const ChatInput = ({ name }: Props) =>{
    const chatGtx = useChat()
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) =>{
        if((event.code.toLowerCase()) === 'enter') {
            if(textInput.trim() !== ''){
                chatGtx?.addMessage(name, textInput.trim());
                setTextInput('');
            }
        }
    }
    return(
       <input 
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`${name}, digite uma mensagem e aperte enter`}
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
       />
    );
}