import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiInformationCircle,
  HiFolder,
  HiCheckBadge,
  HiOutlineDocumentDuplicate,
  HiShieldExclamation,
  HiOutlineInformationCircle,
  HiDocumentDuplicate
} from 'react-icons/hi2';
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
  FaUserTie,

} from "react-icons/fa";

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: < HiInformationCircle /> },
  { name: 'Education', path: '/education', icon: < HiDocumentDuplicate /> },
  { name: 'Experience', path: '/work', icon: <FaUserTie /> },
  { name: 'Projects', path: '/projects', icon: <HiFolder  /> },

  {
    name: 'awards',
    path: '/awards',
    icon: <FaAward />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiUser />,
  },
];

import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return( 
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-red-200/10 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link,index) => {
          return <Link className={`${link.path ===  pathname && 'text-accent'} relative flex
          items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
            <div>              
            </div>
            <div>
            {link.icon}
            </div>
            </Link>; 
        })}
      </div>
    </nav>
  );
};

export default Nav;
