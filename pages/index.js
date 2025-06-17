import ParticlesContainer  from '../components/ParticlesContainer';
import ProjectBtn  from '../components/ProjectsBtn';
import Avatar  from '../components/Avatar';
import { AnimatePresence, motion } from 'framer-motion';
import {fadeIn } from '../variants';
import  TypingAnimation  from "@/components/ui/typing-animation.jsx";
// import BlurIn from "@/components/ui/blur-in";
import LetterPullup from "@/components/ui/letter-pullup";




const Home = () => {
  return <div className='bg-primary/60 h-full'>
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 md:text-left h-full container mx-auto'>

          <motion.h1 variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h1 '><LetterPullup words={"Kashyap pathak"} delay={0.3}/>
            <motion.span variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='text-amber-600 text-3xl'>Sales Engineer.</motion.span><br/>

            <motion.span variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='text-amber-700 text-3xl'>Open For Opportunity Realted To Sales.</motion.span></motion.h1>
          {/* paragraph */}
        {/* <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>The right technology, used with the right mindset, can transform ideas into impactful solutions</p> */}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectBtn/>
        </div>

        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'><ProjectBtn/></motion.div>
      </div>
    </div>
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
      <ParticlesContainer/>
      <motion.div variants={fadeIn('up',0.5)} initial='hidden' animate='show' exit='hidden' transition={{duration:1, ease: 'easeInOut'}} className='w-full h-full max-w-[730px] max-h-[670px] absolute -bottom-32 lg:bottom-0 lg:right-[5%]'>
        <Avatar/>
      </motion.div>
      <TypingAnimation/>
      
    </div>
  </div>;
};

export default Home;
