import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext } from "react";

export const Header = () =>{
  const LoggedUserCtx = useContext(LoggedUserContext)

  const handleLogout = () =>{
    LoggedUserCtx?.setName('');
  }

  return(
    <header>
      <h1 className="text-3xl">Título da pagina</h1>
      {LoggedUserCtx?.name && 
        <>
          <p>Usário logado: {LoggedUserCtx?.name}</p>
          <button onClick={handleLogout}>Sair</button>
        </>
      }
      {!LoggedUserCtx || LoggedUserCtx?.name === '' &&
        <p>Usuário deslogado</p>
      }
      
    </header>
  );
}