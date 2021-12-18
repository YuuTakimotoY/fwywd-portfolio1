import Image from 'next/image';

export default function Card(props) {
  return (
    <div className='px-8 w-full text-center'>
      <Image
        src={props.img_src}
        alt={props.img_alt}
        width={props.img_width}
        height={props.img_height}
        objectFit='contain'
      />
      <h3 className={'m-2 text-xl font-bold ' + props.titleColor}>{props.title}</h3>
      <p className='text-left'>{props.description}</p>
    </div>
  );
}
