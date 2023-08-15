const getWeekDay = (today: Date) =>{
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Props = {
  name: string;
  avatar?: string;
  style: Object;
  roles: string[];
}

export const Person = (
  { name,
    avatar = 'https://img.freepik.com/vetores-premium/icone-de-avatar-masculino-pessoa-desconhecida-ou-anonima-icone-de-perfil-de-avatar-padrao-usuario-de-midia-social-homem-de-negocios-silhueta-de-perfil-de-homem-isolada-no-fundo-branco-ilustracao-vetorial_735449-120.jpg',
    style,
    roles 
  }: Props) =>{
    const today: Date = new Date();


  return (
    <div>
      <h1 style={style}>{name} - {getWeekDay(today)}</h1>
      <img 
        src={avatar} 
        alt={name}
        className="w-40" 
      />
      <ul>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
      </ul>
    </div>
    
  );
}