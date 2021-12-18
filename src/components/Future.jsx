import Image from 'next/image';
import Title from './Shared/Title';

const about = {
  img_src: '/future.png',
  img_alt: 'future',
  description:
    'Webアプリケーションとネイティブアプリの知識を活かしたエンジニアとして活躍したいと考えています。まずは、フロントエンドエンジニアとして一人前と言われるレベルに達して、プロジェクトに役立てる存在になりたいです。',
};

export default function Future() {
  return (
    <div className='pt-48 mx-auto -mt-60 text-black bg-cover bg-future'>
      <section className='pt-8 pb-16 mx-12 lg:mx-0 text-center' id='future'>
        <div className='mx-auto max-w-screen-lg'>
          <div className='flex'>
            <div className='w-1/2'>
              <Title
                japaneseTitle='３年後にやりたいこと'
                englishTitle='Future'
                position='justify-start'
              />
              <p className='pb-4 text-[15px] text-left'>{about.description}</p>
            </div>
            <div className='w-1/2'>
              <Image
                src={about.img_src}
                alt={about.img_alt}
                width={480}
                height={251}
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
