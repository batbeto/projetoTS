'use client'

type Props = {
  title: string,
  subtitle: string
}

type labelProps = {
  label: string
}

const Title = ({ label }: labelProps) => {
  return(
    <h1 className="text-4xl font-bold my-4">{label}</h1>
  );
}

const Subtitle = ({ label }: labelProps) =>{
  return(
    <p>{label}</p>
  );
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <header>
      <Title label={title} />
      <Subtitle label={subtitle}/>
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