// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  FaHtml5,
  FaWordpress,
  FaLaravel,
  FaShopify,
  FaPhp,
 
} from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { FreeMode, Pagination } from "swiper";
import Link from "next/link";



// data
const serviceData = [
  {
    icon: <FaLaravel color="red"/>,
    title: 'Bussiness insurence',
    technplpgy: 'Laravel Orchid',
    description: 'Here I Made Dynamic Section using Laravel Orchid.',
    Link: 'http://laravel.gwcabinet.com/',
  },
  {
    icon: <FaLaravel color="red"/>,
    title: 'Listit',
    technplpgy: 'Laravel , Mysql',
    description: 'Here We made some changes using laravel, javascript.',
    Link:'https://github.com/kashyap-credsoft/'
  },
  {
    icon: <FaShopify color="green"/>,
    title: 'AVL',
    technplpgy: 'Shopify',
    description: 'Made sections various changes in shopify site',
  },
  {
    icon: <FaWordpress color="blue" text='white' />,
    title: 'Phonestation',
    technplpgy: 'Elementor',
    description: 'we made some changes like fonts,sections in wordpress.',
  },
  {
    icon: <FaHtml5 color="orange" />,
    title: 'HTML Template',
    technplpgy: 'Shopify',
    description: 'whiskys mail template and add to shopify',
  },
];
const ServiceSlider = () => {
  return <Swiper
  breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,
    },

    640:{
      slidesPerView:3,
      spaceBetween:15,
    }
  }}
  freeMode={true}
  pagination={{clickable:true}}
  modules={[FreeMode,Pagination]}
  className="h-[auto] sm:h-[340px]"
  >
    {

    serviceData.map((item, index) => {

      return <SwiperSlide key={index}>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'>
        <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 py-8 flex sm:flex-col gap-x-4 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,169,0.15) transition-all duration-300]">
          
          <div className="text-3xl ">{item.icon}</div><br/>
          <div>
            <div>{item.title}</div>
            <div>Technology - {item.technplpgy}</div>
            <p>{item.description}</p>
          </div>&nbsp;
          <div className="text-3xl">
            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent" onClick={() => window.open(item.Link)}/>
          </div>
        </div>
        </motion.div>
        
      </SwiperSlide>
      
    })
    
  }      <h2 className="flex text-4xl">About us</h2>


  </Swiper>;
  
};


export default ServiceSlider;
