import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Particles from "@/components/ui/particles";


import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import IconCloud from "@/components/ui/icon-cloud";


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
const Services = () => {
  return <div className="h-full bg-primary py-36 flex items-center">
    <Circles/>
    <Particles
        className="absolute inset-0 "
        quantity={100}
        ease={80}
        // color={color}
        refresh
      />
      <Bulb/>
        {/* <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8  ">
      <IconCloud iconSlugs={slugs} />
    </div> */}
    <div className="container mx-auto">
      
    </div>
  </div>;
};

export default Services;
