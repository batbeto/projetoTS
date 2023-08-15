import { Card } from "@/components/Card";
import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { peopleList } from "@/data/peopleList";

const Page = () =>{

  const chemists = peopleList.filter(person => person.profession == 'chemist');
  return (
  <>
    <h1>Olá mundo</h1>
    <h2>Lista de quimicos:</h2>
    {chemists.length > 0 &&
    <ul>{chemists.map(
      person => <li>{person.name} - {person.profession}</li>
    )}</ul>
    }
    {peopleList.length > 0 && 
      <ul>
      {peopleList.map(
        person => <li key={person.id}>{person.name} - {person.profession}</li>
      )}
      </ul>
    }    
    <Card 
      phrase="Tudo é tudo e nada é nada"
      author="Adalberto"    
    />      
    <Person 
      name= 'Elon Musk'
      avatar= 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg'
      style= {{color: 'red', fontSize: '30px'}}
      roles= {['COE da Tesla', 'CEO da SpaceX']}
    />
    <Person 
      name= 'Jeff Bezos'
      avatar= 'https://investidorsardinha.r7.com/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-scaled.jpg'
      style= {{color: 'blue', fontSize: '30px'}}
      roles= {['COE da Amazon', 'CEO da Blue Origin']}
    />
    <Person 
      name= 'Adalberto'
      style= {{color: 'Green', fontSize: '30px'}}
      roles= {['COE de tudo']}
    />
    <GeoForm />
  </>
  );
}


export default Page;