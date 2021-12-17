import Image from 'next/image';
import Card from './Shared/Card';
import Title from './Shared/Title';

const abouts = [
  {
    img_src: '/about-1.png',
    img_alt: 'about-1',
    title: '趣味',
    description: 'ゲームが好きです。最近はFPSゲームであるAPEX LEGENDSでよく遊んでいます。',
  },
  {
    img_src: '/about-2.png',
    img_alt: 'about-2',
    title: '好きな食べ物',
    description:
      'カレーうどんが好きです。休日にはよくカレーうどん専門店に行ったりなどして、人気店巡りなどをしています。',
  },
  {
    img_src: '/about-3.png',
    img_alt: 'about-3',
    title: '性格',
    description:
      '真面目な性格です。コツコツ努力を積み重ね、物事を実行してきました。はじめてのことにも結果が出るまで諦めずに挑み続けます。',
  },
];

export default function About() {
  return (
    <div className='mx-auto'>
      <section
        className='flex flex-col pt-8 pb-16 mx-12 lg:mx-0 text-center bg-about'
        id='about'
        style={{ backgroundSize: '100% 80vh' }}
      >
        <div className='mx-auto max-w-screen-lg'>
          <Title
            japaneseTitle='私について'
            englishTitle='about'
            position='justify-center'
            className='gap-12'
          ></Title>
          <div className='flex gap-12'>
            {abouts.map((about) => (
              <>
                <Card
                  img_src={about.img_src}
                  img_alt={about.img_alt}
                  title={about.title}
                  description={about.description}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
