import Carousel from './components/Carousel'
import Image from "next/image";
import { Section } from './components/Section';
import { DestinationCard } from './components/DestinationCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <main className=" flex flex-col items-start justify-start gap-y-10 w-screen h-fit bg-white  ">
      {/* nav bar part  */}
      {/* <Navbar/> */}
      {/* carousel part  */}
      <Carousel/>
      {/* top destinations */}
      <Section 
      topcolor='text-[#FFD600]'
      className='bg-gradient-to-b  from-[#00BEAC] via-[#00BEAC] to-transparent text-white'
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
      topcolor='text-[#0CA296]'
      className=' bg-white text-black'
      title={['more','destinations']} text='Your peace of mind doesn’t have to be tied to where everyone else is. 
      We have a good number of travel and relocation destinations. Take your time and find the perfect one for you. '>
        <div className=' grid  grid-cols-3 gap-[20px] h-fit min-h-[700px] w-full text-white '>



          <div
            style={{ backgroundImage: `url('./m1.png')` }}
            className=' grid relative  cols-span-1 bg-slate-300 h-full rounded-lg bg-cover bg-center bg-no-repeat items-end '>
            {/*  1*/}
            {/*  overlay*/}
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
            {/* location & name */}
            <div className='flex flex-col items-center z-10 justify-center  pb-[150px] font-circular font-bold leading-[50px] text-[40px] text-center '>
              <p>Estaing</p>
              <p className='text-[14px] font-medium tracking-wider font-circular  '>France</p>
            </div>
          </div>



          <div className='grid col-span-2 grid-rows-2  gap-[20px] h-full '>
            <div className=' w-full h-full grid grid-cols-2 gap-[20px]  rounded-lg'>
              <div 
              style={{backgroundImage:`url('./m2.png')`}}
              className='flex  relative w-full h-full bg-slate-400 rounded-lg bg-cover bg-center bg-no-repeat items-end justify-center pb-[70px] ' >
{/* 2 */}
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex  flex-col items-center z-10 justify-center  font-circular font-bold leading-[50px] text-[40px] text-center '>
            <p>Vík í Mýrda</p>
            <p className='text-[14px] font-medium tracking-wider font-circular  '>Iceland</p>
        </div>
              </div>
              <div 
              style={{backgroundImage:`url('./m3.png')`}}

              className='flex relative  w-full h-full bg-slate-700 rounded-lg bg-cover bg-center bg-no-repeat items-end' >
{/* 3 */}
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex  w-full flex-col items-center z-10 justify-center  pb-[70px] font-circular font-bold leading-[50px] text-[40px] text-center '>
            <p>Hamnoy village</p>
            <p className='text-[14px] font-medium tracking-wider font-circular  '>Norway.</p>
        </div>
              </div>


            </div>
            <div 
              style={{backgroundImage:`url('./m4.png')`}}

            className='flex relative w-full h-full bg-slate-500 rounded-lg bg-cover bg-center bg-no-repeat items-end ' >
{/* 4 */}
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex flex-col w-full  items-center z-10 justify-center  pb-[70px] font-circular font-bold leading-[50px] text-[40px] text-center '>
            <p>Montego Bay</p>
            <p className='text-[14px] font-medium tracking-wider font-circular  '>JAMAICA</p>
        </div>
            </div>
          </div>
        </div>
      </Section>
      {/* footer  */}
      <Footer/>
    </main>
  );
}
