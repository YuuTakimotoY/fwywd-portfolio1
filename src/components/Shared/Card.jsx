import Image from 'next/image';

export default function Card(props) {
  return (
    <div className='w-full text-center'>
      <Image src={props.img_src} alt={props.img_alt} width={240} height={180} objectFit='contain' />
      <h3 className='m-2 text-xl font-bold text-green'>{props.title}</h3>
      <p className='text-left'>{props.description}</p>
    </div>
  );
}
