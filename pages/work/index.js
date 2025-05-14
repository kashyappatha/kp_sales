import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import CountUp from "react-countup";
import Meteors from "@/components/ui/meteors.jsx";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0.4) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const About = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-center overflow-y-auto">
          <Meteors/>

      <motion.h1 
        variants={fadeIn()}
        initial="hidden"
        animate="show"
        className="text-4xl font-extrabold text-center text-accent mb-8"
      >
        Job Experience
      </motion.h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
      <motion.div variants={fadeIn('left')} initial="hidden" animate="show">
          <div className="p-8 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">Evolution Infosystem</h2>
            <p className="text-lg text-bold text-white">Webdeveloper intern</p>
            <p className="text-lg text-bold text-white">Duration - 2 Month</p>
            <p className="text-lg text-bold text-white">Technology - Laravel</p>
            
          </div>
          
        </motion.div>

        <motion.div variants={fadeIn('left')} initial="hidden" animate="show">
          <div className="p-8 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">Dcoded Innovation</h2>
            <p className="text-lg text-bold text-white">Webdeveloper intern</p>
            <p className="text-lg text-bold text-white">Duration - 6 Month</p>
            <p className="text-lg text-bold text-white">Technology - Laravel</p>
            
          </div>
          
        </motion.div>

        <motion.div variants={fadeIn('right')} initial="hidden" animate="show">
          <div className="p-8 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">Credsoft Technology</h2>
            <p className="text-lg text-bold text-white">Webdeveloper Apprentice</p>
            <p className="text-lg text-bold text-white">Duration - Continue
            </p>
            <p className="text-lg text-bold text-white">Technology - Wordpress , Laravel , Excel, Shopify</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn('right')} initial="hidden" animate="show">
          <div className="p-11 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">My Bussiness Card</h2><br/>
            <div className="flex space-x-4 justify-center">
              <a
                href="./kashyappathak.pdf"
                download
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-blue-700 justify-center"
              >
                <FaDownload className="mr-2" />
              </a>
              <a
                href="./ksp.pdf"
                download
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-green-700 justi"
              >
                <FaDownload className="mr-2" />
              </a>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default About;
