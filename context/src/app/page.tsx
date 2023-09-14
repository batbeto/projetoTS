'use client'
type Props = {
  title: string,
  subtitle: string
}
const Title = () => {
  return(
    <h1>...</h1>
  );
}

const Subtitle = () =>{
  return(
    <p>...</p>
  );
}

const Header = ({ title, subtitle}: Props) => {
  return (
    <header>
      <Title />
      <Subtitle />
    </header>
  );
}

const Page = () =>{
  const pageInfo = {
    title: 'Titulo da página',
    subtitle: 'Sub da página'
  };

  return (
    <div className="container mx-auto">
      <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
    </div>
  );
}

export default Page;