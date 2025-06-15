/* eslint-disable react/jsx-key */
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
  FaIndustry,
  FaHandshake,
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

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Basic CNC & VMC understanding',
        icons: [
         <FaIndustry/>

        ],
      },
      {
        title: 'Basic Knowledge Of Sales, Marketing , Quotation , Payment',
        icons: [
         <FaHandshake/>

        ],
      },
      
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Patent Design for Gesture chair',
  //       stage: '2022',
  //       // image:'https://media.licdn.com/dms/image/v2/D4D22AQGSpzCjXSs-hg/feedshare-shrink_1280/feedshare-shrink_1280/0/1714032934302?e=1738195200&v=beta&t=IYwQ_Bm4D8DD6xlv95blNZ4qtBUYXzyta1964WJ_geU'
  //     },
  //     {
  //       title: 'Copyright Registered For website',
  //       stage: '2023',
  //       // image:'https://media.licdn.com/dms/image/v2/D562DAQHKAFgvcWCTHw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1706847809223?e=1735826400&v=beta&t=tUmrn4TCuTYeNtGuFGzomekTfjPIfeMXgn3aQ0xZkMk'
  //     },
  //     {
  //       title: 'Awarded B.Tech Degree Certificate',
  //       stage: '2024',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Sales & Service Assitant',
        stage: 'Feb- 2025',
      },
      
    ],
  },
  {
    title: 'Study',
    info: [
      {
        title: '10th - Dholakiya School',
        stage: '2018',
        // image:'/10th.jpg'
      },
      {
        title: '11th - 12th SOS',
        stage: '2018-2020',
        // image:'/12th+gujcet.jpg'
      },
      {
        title: 'Marwadi University ICT',
        stage: 'Jan 2020 - Jan 2024',
        image:''
      },
    ],
  },
  {
    title: 'Hobby',
    info: [
     
      {
        title: 'Exploring',
        image:'https://img.icons8.com/ios/50/search--v1.png'
      },
      {
        title: 'Traveling',
        image:'https://img.icons8.com/ios/50/around-the-globe.png'
      },
    
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from "../../components/Circles";
import Meteors from "@/components/ui/meteors.jsx";
import TypingAnimation from "@/components/ui/typing-animation.jsx";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { AnimatePresence, motion } from 'framer-motion';
import {fadeIn } from '../../variants';
import CountUp from "react-countup";


import IconCloud from "@/components/ui/icon-cloud";

// import BlurIn from "@/components/ui/blur-in.jsx";
// import { VelocityScroll } from "@/components/ui/scroll-based-velocity";



const About = () => {
  const [index,setIndex] = useState(0);
  console.log(index);
  return( 
  <div className="h-full  bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    <Meteors/>
    <TypingAnimation/>
   <div className="container max-h-[400px] xl:max-h-[600px] mx-auto h-auto flex flex-col items-center xl:flex-row gap-x-6 xl:overflow-y-hidden">
      <div className="flex-1 flex flex-col justify-center p-3 xl:p-0">
      <motion.span variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='h1 z-10'> <h1 className="hidden md:flex text-2xl font-bold mb-0 ">Let&apos;s See </h1></motion.span>
      <GradualSpacing
      className="font-display text-justify text-4xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
      text="About Me"
    />
  <motion.span variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='span text-white'><p className="text-lg mb-2 text-justify max-w-[500px] mx-auto xl:mx-0 text-white">
    I am Kashyap Pathak From Rajkot.
  </p><p className="text-lg mb-2 text-justify max-w-[500px] mx-auto xl:mx-0 text-white">
    I Completed B.Tech Degree in Information and Communication Technology (ICT) at Marwadi University.
  </p>
 
  <p className="text-lg mb-2 text-justify max-w-[500px] mx-auto xl:mx-0 text-white">
   I have Knowledge of Sales And Marketing , Basic Machine related Knowledge.
  </p>
  <p className="text-lg mb-2 text-justify max-w-[500px] mx-auto xl:mx-0 text-white">
    Currently, I am working at <span className="text-bold text-accent">Ace Micromatic PVT LTD</span>  as Sales Assitent.
  </p>
  </motion.span>&nbsp;
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'> 
      <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
        <div className="flex flex-1 xl:gap-x-6 xl:justify-center ">
          <div className='relative flex-1 after:w-[0px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 justify-center'>
            <div className='text-2xl xl:text-4xl font-bold text-accent'>
              <CountUp start={0} end={4} duration={4}/>+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[10]">
              Month of experience
            </div>
          </div>
         
          
        </div>
      </div>
      </motion.div>
      </div>
      <div className="hidden md:flex flex-col w-full xl:max-w-[48%] h-[480px] text-white">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return(
             <div 
             key={itemIndex}
              className={`${
              index === itemIndex &&
               'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              } 
               cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-0 after:left-0`}
               onClick={() => setIndex(itemIndex)}
            
            >  
              {item.title}
            </div>
            );
          })}
        </div>
        <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start '>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row items-center md:items-start justify-between max-w-max '>
                <div className="font-bold mb-2 md:mb-0 ">{item.title}&nbsp;</div>
                <div className='hidden md:flex'>-&nbsp;&nbsp;</div>
                <div>{item.stage}</div>
                <div>      
                        {item.image && <img src={item.image} alt={item.title} width={30}   style={{ filter: 'invert(1)' }}
 />}
                </div>
                 {/* {item.image && (
                <div className='flex flex-1 justify-center z-10 img-container relative'>
                  <img src={item.image} alt={item.title} style={{ maxWidth: '30%', height: 'auto' }} className="h-auto hover-effect"  />
                </div>
                )}  */}
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon , itemIndex) => {
                      return <div className='text-3xl transition-all duration-300'>{icon}</div>;
                  })}
                </div>
            
              </div>         
            );
          })}
            
        </div>
        
        </motion.div>
      </div>
      
    </div>
   

  </div>
  
  );
};

export default About;