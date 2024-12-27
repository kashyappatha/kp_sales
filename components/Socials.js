import Link from "next/link";
import {RiLinkedinLine, RiInstagramLine, RiFacebookLine,RiGithubLine,RiStackOverflowLine} from 'react-icons/ri';
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.instagram.com/p/C_3dDdZsqAj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='} className="hover:text-accent transition-all duration-300"><RiInstagramLine/></Link>
    <Link href={'https://www.facebook.com/kashyap.pathak.98?mibextid=ZbWKwL'} className="hover:text-accent transition-all duration-300"><RiFacebookLine/></Link>
    <Link href={'https://github.com/kashyappatha'} className="hover:text-accent transition-all duration-300"><RiGithubLine/></Link>
    <Link href={'https://www.linkedin.com/in/kashyap-pathak-498996203/'} className="hover:text-accent transition-all duration-300"><RiLinkedinLine/></Link>
    <Link href={'https://stackoverflow.com/users/22828138/kashyappathak'} className="hover:text-accent transition-all duration-300"><RiStackOverflowLine/></Link>




  </div>;
};

export default Socials;
