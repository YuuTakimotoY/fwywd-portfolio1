import Image from 'next/image';
import Link from 'next/link';

const headerLinks = ['about', 'skills', 'values', 'future'];

export default function Header() {
  return (
    <header className='container flex justify-between items-center mx-auto'>
      <Link href='/' passHref>
        <Image src='/logo.png' width={161} height={56} alt='Logo' objectFit='contain' />
      </Link>

      <nav>
        <ul className='flex'>
          {headerLinks.map((header) => (
            <li className='mx-5 font-bold text-green uppercase' key={header}>
              <Link href={`#${header}`}>{header}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
