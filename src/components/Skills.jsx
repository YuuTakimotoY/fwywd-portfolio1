import Image from 'next/image';
import Skillbar from './Shared/Skillbar';
import Title from './Shared/Title';

const skillAbout = {
  img_src: '/skill.png',
  img_alt: 'skill',
  description:
    '.NETアプリケーションの作成経験とネイティブアプリエンジニアとしてのスキルが自分の柱になっています。新しい技術に対する知的好奇心が高いため、Dockerなど所属チームで扱っていなかった技術であっても積極的に試してきました。',
};

const skills = [
  { name: 'C#', progress: 80 },
  { name: 'VB', progress: 70 },
  { name: 'Swift', progress: 60 },
  { name: 'React', progress: 10 },
];

export default function Skills() {
  return (
    <div className='mx-auto'>
      <section
        className='flex flex-col pt-8 pb-16 mx-12 lg:mx-0 text-center bg-skills'
        id='skills'
        style={{ backgroundSize: '100% 100%' }}
      >
        <div className='mx-auto max-w-screen-lg'>
          <div className='ml-auto w-1/2'>
            <Title
              japaneseTitle='スキル'
              englishTitle='skills'
              position='justify-start'
              className='gap-12'
            />
          </div>
          <div className='flex'>
            <div className='m-auto w-1/2'>
              <Image
                src={skillAbout.img_src}
                alt={skillAbout.img_alt}
                width={535}
                height={370}
                objectFit='contain'
              />
            </div>
            <div className='w-1/2'>
              <p className='pb-4 text-left'>{skillAbout.description}</p>
              <div className='pt-4 pb-4 bg-white'>
                {skills.map((skill, key) => (
                  <Skillbar name={skill.name} progress={skill.progress} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
