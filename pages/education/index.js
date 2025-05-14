import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0.4) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const About = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-center overflow-y-auto">
      <motion.h1 
        variants={fadeIn()}
        initial="hidden"
        animate="show"
        className="text-4xl font-extrabold text-center text-accent mb-8"
      >
        Education
      </motion.h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeIn('left')} initial="hidden" animate="show">
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">10th</h2>
            <p className="text-lg text-bold text-white">Dholakiya School - 2018</p>
            <p className="text-lg text-bold text-white">90.20 PR</p>
          </div>
          
        </motion.div>

        <motion.div variants={fadeIn('right')} initial="hidden" animate="show">
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">12th</h2>
            <p className="text-lg text-bold text-white">SOS - 2020</p>
            <p className="text-lg text-bold text-white">68 PR</p>
          </div>
        </motion.div>

        <motion.div  variants={fadeIn('left')} initial="hidden" animate="show">
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-accent">Degree</h2>
            <p className="text-lg text-bold text-white">Marwadi University B.Tech (ICT)</p>
            <p className="text-lg text-bold text-white">Jan 2020 - Jan 2024</p>
          </div>
          
        </motion.div>
        <motion.div variants={fadeIn('right')} initial="hidden" animate="show" className="bg-gray-700 rounded-xl p-5">
        <h2 className="text-2xl text-accent mb-4">Documents</h2>
        <div className="flex gap-x-6 justify-center ">
          <a href="../../10th.jpg" className="flex items-center text-gray-200 hover:text-accent transition-all">
            <FaCloudDownloadAlt className="mr-2 text-xl" />
            <span>10th </span>
          </a>
          <a href="../../12th+gujcet.jpg" className="flex items-center text-gray-200 hover:text-accent transition-all">
            <FaCloudDownloadAlt className="mr-2 text-xl" />
            <span>12th </span>
          </a>
          <a href="../../collage_final_result.jpg" className="flex items-center text-gray-200 hover:text-accent transition-all">
            <FaCloudDownloadAlt className="mr-2 text-xl" />
            <span>College Result</span>
          </a>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
