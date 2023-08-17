"use client"
import { CustomButton } from '@/components/CustomButton'

const Page = () =>{

  const handleButton1 = () =>{
    alert('tudo certo 1');
  }
  
  const handleButton2 = () =>{
    alert('tudo certo 2');
  }
  
  const handleButton3 = () =>{
    alert('tudo certo 3');
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label='b1' onClick={handleButton1}/>
      <CustomButton label='b2' onClick={handleButton2}/>
      <CustomButton label='b3' onClick={handleButton3}/>
    </div>
  );
}


export default Page;