'use client';
import Carousel from './components/Carousel'
import Image from "next/image";
import { Section } from './components/Section';
import { DestinationCard } from './components/DestinationCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className=" flex flex-col items-start justify-start gap-y-10 w-full h-fit bg-white  ">
      {/* nav bar part  */}
      <Navbar/>
      {/* carousel part  */}
      <Carousel/>
      {/* top destinations */}
      <Section 
      topcolor='text-[#FFD600]'
      className='bg-gradient-to-b  from-[#00BEAC] via-[#00BEAC] to-transparent text-white'
      title={['top','destinations']} text='Your peace of mind doesn’t have to be tied to where everyone else is. 
      We have a good number of travel and relocation destinations. Take your time and find the perfect one for you. '>
       <div className='flex group  flex-row items-center justify-center  w-full h-fit  self-center justify-self-center min-[700px]:gap-[20px] gap-2 '>
        {/* render cards  */}
          <DestinationCard idx={0.5} key={1} img='/c1.jpeg' loc='Paraty' name='Rio De Janerio'/>
          <DestinationCard idx={0.7} key={2} img='/c2.jpeg' loc='Morretes' name='Parana'/>
          <DestinationCard idx={0.9} key={3} img='/c3.jpeg' loc='Olinda' name='Pernambuco'/>
          <DestinationCard idx={1.1} key={4} img='/c4.png' loc='Gramado' name='Rio Grande Do Sul'/>


       </div>
      </Section>
      {/* more destinations */}
      <Section 
      topcolor='text-[#0CA296]'
      className=' bg-white text-black'
      title={['more','destinations']} text='Your peace of mind doesn’t have to be tied to where everyone else is. 
      We have a good number of travel and relocation destinations. Take your time and find the perfect one for you. '>
        <div className=' grid  grid-cols-3 min-[700px]:gap-[20px] gap-1 h-fit min-[700px]:min-h-[700px] min-h-[300px] w-full text-white '>



          <motion.div
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true,amount:0.5}}
            whileHover={{scale:1.02}}
            transition={{duration:1,type:'spring',stiffness:100}}
            style={{ backgroundImage: `url('./m1.png')` }}
            className=' grid relative hover:cursor-pointer  transition-all duration-200  cols-span-1 bg-slate-300 h-full rounded-lg bg-cover bg-center bg-no-repeat items-end '>
{/*  1*/}
            {/*  overlay*/}
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
            {/* location & name */}
            <div className='flex flex-col items-center z-10 justify-center  min-[700px]:pb-[150px] pb-[100px] font-circular font-bold
            max-[700px]:leading-[30px]
             leading-[50px] min-[900px]:text-[40px] text-[18px] text-center '>
              <p>Estaing</p>
              <p className='text-[14px] max-[700px]:text-[10px] font-medium tracking-wider font-circular  '>France</p>
            </div>
          </motion.div>



          <div  className='grid col-span-2 grid-rows-2  gap-[5px] min-[700px]:gap-[20px] h-full '>
            <div className=' w-full h-full grid grid-cols-2 gap-[15px] min-[700px]:gap-[20px]  rounded-lg'>
              <motion.div 
                          initial={{y:-100,opacity:0}}
                          whileInView={{y:0,opacity:1}}
                          viewport={{once:true,amount:0.3}}
                          transition={{duration:1.4,type:'spring',stiffness:100}}
              style={{backgroundImage:`url('./m2.png')`}}
              className='flex  relative w-full h-full bg-slate-400 rounded-lg bg-cover bg-center bg-no-repeat items-end justify-center min-[700px]:pb-[70px] pb-[50px] ' >
{/* 2 */}
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex  flex-col items-center z-10 justify-center  font-circular font-bold leading-[30px] 
        min-[700px]:leading-[50px] text-[18px] min-[900px]:text-[40px] text-center '>
            <p>Vík í Mýrda</p>
            <p className='text-[14px] max-[700px]:text-[10px] font-medium tracking-wider font-circular  '>Iceland</p>
        </div>
              </motion.div>
              <motion.div 
                initial={{y:100,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true,amount:0.3}}
                transition={{duration:1.8,type:'spring',stiffness:100}}
              style={{backgroundImage:`url('./m3.png')`}}

              className='flex relative  w-full h-full bg-slate-700 rounded-lg bg-cover bg-center bg-no-repeat items-end' >
{/* 3 */}
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex  w-full flex-col items-center z-10 justify-center pb-[50px] min-[700px]:pb-[70px] font-circular font-bold leading-[30px] min-[700px]:leading-[50px] text-[18px]
         min-[900px]:text-[40px] text-center '>
            <p>Hamnoy village</p>
            <p className='text-[14px] max-[700px]:text-[10px] font-medium tracking-wider font-circular  '>Norway.</p>
        </div>
              </motion.div>


            </div>
            <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{once:true,amount:0.3}}
                transition={{duration:2,type:'spring',stiffness:100}}
              style={{backgroundImage:`url('./m4.png')`}}

            className='flex relative w-full h-full bg-slate-500 rounded-lg bg-cover bg-center bg-no-repeat items-end ' >
{/* 4 */}
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex flex-col w-full  items-center z-10 justify-center pb-[30px]
         min-[700px]:pb-[70px] font-circular font-bold leading-[30px] min-[700px]:leading-[50px] min-[900px]:text-[40px] text-[18px] text-center '>
            <p>Montego Bay</p>
            <p className='min-[700px]:text-[14px] max-[700px]:text-[10px] font-medium tracking-wider font-circular  '>JAMAICA</p>
        </div>
            </motion.div>
          </div>
        </div>
      </Section>
      {/* footer  */}
      <Footer/>
    </div>
  );
}
