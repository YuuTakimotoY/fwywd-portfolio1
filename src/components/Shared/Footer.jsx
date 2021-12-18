import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pt-8 pb-6 mx-auto text-center text-white bg-footer'>
      <div className='flex justify-center mb-5 space-x-2'>
        <span className='my-auto text-[11px]'>CREATED BY</span>
        <span className='text-[18px] font-bold' id='name'>
          瀧本 佑
        </span>
      </div>
      <div className='mb-5'>
        <Image
          src='/logo_white.png'
          width={120}
          height={120}
          alt='Logo_White'
          objectFit='contain'
        />
      </div>
      <div className='flex justify-center mb-5'>
        <Link href='https://twitter.com' passHref>
          <a className='m-3'>
            <Image src='/twitter.png' width={20} height={20} alt='twitter' objectFit='contain' />
          </a>
        </Link>
        <Link href='https://www.facebook.com' passHref>
          <a className='m-3'>
            <Image src='/facebook.png' width={20} height={20} alt='facebook' objectFit='contain' />
          </a>
        </Link>
      </div>

      <span className='text-[11px]'>&copy; 2021 KIKAGAKU</span>
    </footer>
  );
}
