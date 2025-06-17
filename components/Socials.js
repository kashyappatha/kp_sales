import Link from "next/link";
import {RiLinkedinLine, RiInstagramLine, RiFacebookLine,RiGithubLine,RiStackOverflowLine} from 'react-icons/ri';
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.instagram.com/p/C_3dDdZsqAj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer"><RiInstagramLine/></Link>
    <Link href={'https://www.facebook.com/kashyap.pathak.98?mibextid=ZbWKwL'} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer"><RiFacebookLine/></Link>
    <Link href={'https://github.com/kashyappatha'} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer"><RiGithubLine/></Link>
    <Link href={'https://www.linkedin.com/in/kashyap-pathak-498996203/'} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer"><RiLinkedinLine/></Link>
    <Link href={'https://stackoverflow.com/users/22828138/kashyappathak'} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer"><RiStackOverflowLine/></Link>
    <Link 
      href="./Kashyap_Resume.pdf"
      onClick={(e) => {
        e.preventDefault();
        // Open in new tab
        window.open("/Kashyap_Resume.pdf", "_blank");
        // Download
        const link = document.createElement('a');
        link.href = "/Kashyap_Resume.pdf";
        link.download = "Kashyap_Resume.pdf";
        link.click();
      }}
      className="bg-primary hover:bg-primary/90 text-white px-4 py-1 rounded-lg transition-all duration-300 text-sm flex items-center gap-0 border border-white whitespace-nowrap"
    >
      Download CV
    </Link>



  </div>;
};

export default Socials;
