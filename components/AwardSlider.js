// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  FaHtml5,
  FaWordpress,
  FaLaravel,
  FaShopify,
  FaPhp,
  FaChair,
  FaFilePdf,
  FaAward,
  FaCertificate,

} from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { FreeMode, Pagination } from "swiper";
const awardData = [
  {
    icon: <FaPhp color="purple" />,
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQF1Dy-19AeiUg/feedshare-shrink_1280/feedshare-shrink_1280/0/1691080836318?e=1738800000&v=beta&t=-N2gdNiU7tEGxNCvpjNTtXdUwlL-JWHJHkG_XjAdSzU',
    title: 'copyright registered for my website ',
    technplpgy: 'Advertisement register',
    description: 'Here I Made project in sem 7 of ict where collage registered copyright for my website.',
  },
  {
    icon: <FaChair color="grey" />,
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQEBeAY8apIL6Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1714032933324?e=1738800000&v=beta&t=iYIlhvcNCBe6wA--JC9pQw9LV1eUgDWTMrF4sznVu4E',
    title: 'Goverment Patent Register for Gesture chair',
    technplpgy: 'patent registered for my chair design',
    description: 'Here I made designiin sem 6 of ict  where collage apply for patent apporve from goverment',
  },
  {
    icon: <FaAward color="gold" />,
    title: 'Degree Certificate',
    technplpgy: 'B.Tech Degree in Domain of ICT',
    description: 'Here I Completed Bachlor of Technology in Domain of Information and Communication Technology.',
  },
  {
    icon: <FaAward color="red" text='white' />,
    title: 'Apprentice certificate',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQF6lp0IhiiTdQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1706848400780?e=1736323200&v=beta&t=JfQiZqOWjSyZ0s2BRwTrNGtpNW0VgkcBc2GeluqZ770',
    technplpgy: 'Dcoded Innovation Webdeveloper',
    description: 'Here i complete my apprenticeship in Dcoded Innovation in the domain of web development.',
  },
];


const AwardSlider = () => {
  return <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }}
    freeMode={true}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination]}
    className="h-[auto] sm:h-[340px]"
  >
    {

      awardData.map((item, index) => {

        return <SwiperSlide key={index}>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 py-2 flex sm:flex-col gap-x-4 sm:gap-x-0 group  hover:bg-[rgba(89,169,0.15) transition-all duration-300] ">

              <div className="text-3xl ">{item.icon}</div><br />
              <div className=" ">

                <div>{item.title}</div>
                <div>Technology - {item.technplpgy}</div>
                <p>{item.description}</p>
              </div>&nbsp;
              <div className="text-3xl">
                {/* <div onClick={() => window.open(item.image, '_blank')}> */}
                <div className="cursor-pointer" onClick={() => {
                  const popup = window.open("", "ImagePopup", "width=600,height=400");
                  popup.document.write(`<html><head><title>Image</title></head><body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;background-color:black;"><img src="${item.image}" style="max-width:100%;max-height:100%;"/></body></html>`)
                  popup.document.close();
                }}>
                  <RxArrowTopRight />
                </div>
                {/* </div> */}
              </div>

            </div>
          </motion.div>
          <br />
        </SwiperSlide>

      })

    }
    <h5 className="flex text-normal justify-center md:justify-start p-4">Award Earn During Collage And Compney </h5>

  </Swiper>;
};

export default AwardSlider;
