import Image from 'next/image';

const mainTitle = 'Yuu Takimoto';
const subTitle = 'Programmer';

export default function Hero() {
  return (
    <div className='flex justify-between items-center py-10 bg-header'>
      <div className='pl-24 text-white'>
        <h1 className='text-[42px] font-bold'>{mainTitle}</h1>
        <h2 className='pt-1 text-[28px]'>{subTitle}</h2>
      </div>
      <div className='pr-10'>
        <Image src='/hero.png' alt='Hero' width={585} height={498} objectFit='contain' />
      </div>
    </div>
  );
}
