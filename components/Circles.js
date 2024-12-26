import Image from 'next/image';
const Circles = () => {
  return <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge'>
    <Image src={'/circles.png'} width={100} height={100} alt='' className='w-full h-full' />
  </div>;
};

export default Circles;
