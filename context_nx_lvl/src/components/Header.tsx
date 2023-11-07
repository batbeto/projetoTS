export const Header = () => {
  return(
    <header>
      <h1 className="text-3xl">Titulo da página</h1>

      <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
        <input type="text" placeholder="Digite um título" className="border border-gray-300 p-2 text-black text-xl" />
        <textarea placeholder="Digite uma descrição" className="border border-gray-300 p-2 text-black text-xl h-24"></textarea>
        <button className="bg-blue-500 p-3 text-white rounded-md">Adicionar</button>
      </div>
    </header>
  );
}