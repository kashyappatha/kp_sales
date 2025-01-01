import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaLaravel,
  FaShopify,
  FaDatabase,
  FaFileCode,
  FaElementor,
  FaCloudDownloadAlt
} from "react-icons/fa";


import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


import Avatar from '../../components/Avatar';
import Circles from "../../components/Circles";
import Meteors from "@/components/ui/meteors.jsx";
import TypingAnimation from "@/components/ui/typing-animation.jsx";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { AnimatePresence, motion } from 'framer-motion';
import {fadeIn } from '../../variants';
import CountUp from "react-countup";
import Confetti from "../../components/ui/confetti";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { Timeline } from "@/components/ui/timeline";
import { Vortex } from "../../components/ui/vortex";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";



// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

// import BlurIn from "@/components/ui/blur-in.jsx";
// import { VelocityScroll } from "@/components/ui/scroll-based-velocity";


const About = () => {
  const [index,setIndex] = useState(0);
  console.log(index);
  return( 
  <div className="h-full  bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* <Meteors/> */}
    <Confetti
        
        className="absolute left-0 top-0 z-0 size-full w-full h-full max-w-[800px]"
        onMouseEnter={() => {
          Confetti.current?.fire({});
        }}/>
         {/* <Vortex
        backgroundColor
        rangeY={100}
        particleCount={100}
        baseHue={10}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-[200px] h-full"
      ></Vortex> */}
      {/* <BackgroundBeamsWithCollision/  > */}
    <TypingAnimation/>
   <div className="container max-h-[400px] xl:max-h-[600px] mx-auto h-auto flex flex-col items-center xl:flex-row gap-x-6 xl:overflow-y-hidden overflow-y-scroll ">
      <div className="flex-1 flex flex-col justify-center">
      <motion.span variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h1 z-10'> <h1 className="text-2xl font-bold mb-0 ">Let&apos;s Know More </h1></motion.span>
      <GradualSpacing
      className="font-display text-justify text-4xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
      text="Education"
    />
  <motion.span variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='span text-white'>
  </motion.span>&nbsp;
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'> 
        
      <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
        <div className="flex flex-1 xl:gap-x-6 xl:justify-center ">
          <div className='relative flex-1 after:w-[0px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 justify-center'>
            <div className='text-2xl xl:text-4xl font-bold text-accent'>
              <CountUp start={0} end={10} duration={5}/>th
            </div><br></br>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[10]">
              Dholakiya School-
              2018&nbsp;
              90.20PR
            </div>
            <details>10th with subject maths,<br></br>hindi,gujarati,computer,science,<br></br>Economicas,sanskrit</details>
          </div>
          <div className='relative flex-1 after:w-[0px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-bold text-accent'>
              <CountUp start={0} end={12} duration={5}/>th
              
            </div><br></br>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[10]">
              SOS - 2020 -68PR
            </div>
            <details>Physics, chemistry, maths.</details>
          </div>
          
        </div>
        
      </div>
      <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
      <div className='relative flex-1 after:w-[0px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-bold text-accent'>
            1st to 10th
              
            </div><br></br>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[10]">
             1 to 3 - Gandhi School <br></br> 4th to 10 - Dholakiya School
            </div>
            
          </div>
        <div className="flex flex-1 xl:gap-x-6 xl:justify-center ">
          <div className='relative flex-1 after:w-[0px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 justify-center'>
            <div className='text-2xl xl:text-4xl font-bold text-accent'>
              Degree
            </div><br></br>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[10]">
              Marwadi University(ICT)<br></br>
              jan 2020-Jan 2024&nbsp;
              7.29CPI,
              8.78SPI

            </div>
            <details>
              WebDevelopment , Programming Language, <br></br> Hardware,Blockchain,OS
            </details>
          </div>
         
          
        </div>
        
      </div>
      </motion.div>
      </div><BackgroundBeamsWithCollision/  >
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] text-white">
      <h2 className="text-4xl text-accent">Work Experience</h2><br/>
        <div className="grid grid-cols-2 gap-4 mx-auto xl:mx-0 mb-4">
          {/* Add your codadwadantent here for the 2 by 2 grid */}
          
          <div>
          <p className="text-2xl">Dcoded innovation 2024</p>
          
            <span>Jan 2024 - July 2024</span><br/>
            <a href="">Certificate</a>
          </div>
          <div>
          <p className="text-2xl">Credsoft Technology 2024</p>
            <span>July 2024 - Present</span><br/>
            <a href="">Certificate</a>
          </div>
        </div>
        <h2 className="text-4xl text-accent">Technology</h2><br/>
        <div className="grid grid-cols-2 gap-4 mx-auto xl:mx-0 mb-4">
          {/* Add your codadwadantent here for the 2 by 2 grid */}
          
          <div>
          <p className="text-2xl">Dcoded innovation 2024</p>
            <span>jan 2024 - july - 2024</span><br/>
            <span>Technology :&nbsp;&nbsp;<FaDatabase className="inline" />&nbsp;&nbsp;<FaLaravel className="inline" /></span>
            <details>
              <p>Learning laravel, adminlte integration and more </p>
            </details>
          </div>
          <div>
          <p className="text-2xl">Credsoft Technology 2024</p>
            <span>jan 2024 - july - 2024</span><br/>
            <span>Technology :&nbsp;&nbsp;<FaDatabase className="inline " />&nbsp;&nbsp;<FaLaravel className="inline" />&nbsp;&nbsp;<FaWordpress className="inline" />&nbsp;<FaShopify className="inline" />&nbsp;<FaElementor className="inline" /></span>
            <details>
              <p>In Credsoft Technology I working on Laravel , Shopify , HTML , CSS , WORDPRESS etc.. also Data Entry and Exploring more... </p>
            </details>
          </div>
        </div>
        <h2 className="text-3xl text-accent text-left">Documents</h2><br/>
        <div className="flex flex-row space-x-6 text-left justify-left">
          <a href="../../10th.jpg" className="flex items-center">
            <FaCloudDownloadAlt className="mr-2" />10th
          </a>
          <a href="../../12th+gujcet.jpg" className="flex items-center">
            <FaCloudDownloadAlt className="mr-2" />12th
          </a>
          <a href="../../collage_final_result.jpg" className="flex items-center">
            <FaCloudDownloadAlt className="mr-2" /> Collage Result
          </a>
          
        </div>
        <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
         
       
        </div>
        
        </motion.div>
        
      </div>
      
    </div>
   

  </div>
  
  );
};

export default About;
