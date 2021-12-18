import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pt-8 pb-6 mx-auto text-center text-white bg-footer'>
      <div className='flex gap-2 justify-center mb-5'>
        <span className='my-auto text-xs'>CREATED BY</span>
        <span className='text-lg font-bold' id='name'>
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
      <div className='flex gap-5 justify-center mb-5'>
        <Link href='https://twitter.com' passHref>
          <Image src='/twitter.png' width={20} height={20} alt='twitter' objectFit='contain' />
        </Link>
        <Link href='https://www.facebook.com' passHref>
          <Image src='/facebook.png' width={20} height={20} alt='facebook' objectFit='contain' />
        </Link>
      </div>

      <span className='text-xs'>&copy; 2021 KIKAGAKU</span>
    </footer>
  );
}
