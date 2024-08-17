import Carousel from './components/Carousel'
import Image from "next/image";
import { Section } from './components/Section';
import { DestinationCard } from './components/DestinationCard';

export default function Home() {
  return (
    <main className=" flex flex-col items-start justify-start gap-y-10 w-screen h-screen bg-white mb-[100px] ">
      {/* nav bar part  */}
      {/* carousel part  */}
      {/* <Carousel/> */}
      {/* top destinations */}
      <Section 
      className='bg-gradient-to-b  from-[#00BEAC] via-[#00BEAC] to-transparent'
      title={['top','destinations']} text='Your peace of mind doesn’t have to be tied to where everyone else is. 
      We have a good number of travel and relocation destinations. Take your time and find the perfect one for you. '>
       <div className='flex  flex-row items-center justify-center  w-full h-fit  self-center justify-self-center gap-[20px] '>
        {/* render cards  */}
          <DestinationCard key={1} img='/c1.jpeg' loc='Paraty' name='Rio De Janerio'/>
          <DestinationCard key={2} img='/c2.jpeg' loc='Morretes' name='Parana'/>
          <DestinationCard key={3} img='/c3.jpeg' loc='Olinda' name='Pernambuco'/>
          <DestinationCard key={4} img='/c4.png' loc='Gramado' name='Rio Grande Do Sul'/>


       </div>
      </Section>
      {/* more destinations */}
      <Section 
      className='bg-white '
      title={['more','destinations']} text='Your peace of mind doesn’t have to be tied to where everyone else is. 
      We have a good number of travel and relocation destinations. Take your time and find the perfect one for you. '>
        .
      </Section>
      {/* footer  */}
    </main>
  );
}
