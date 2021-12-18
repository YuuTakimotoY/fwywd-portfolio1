import Image from 'next/image';

const mainTitle = 'Yuu Takimoto';
const subTitle = 'Programmer';

export default function Hero() {
  return (
    <div className='bg-header'>
      <div className='flex flex-row items-center mx-auto'>
        <div className='m-auto text-white'>
          <h1 className='text-4xl font-bold'>{mainTitle}</h1>
          <h2 className='text-xl'>{subTitle}</h2>
        </div>
        <div className='m-5'>
          <Image src='/hero.png' alt='Hero' width={585} height={500} objectFit='contain' />
        </div>
      </div>
    </div>
  );
}
