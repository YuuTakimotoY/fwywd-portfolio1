import Card from './Shared/Card';
import Title from './Shared/Title';

const values = [
  {
    img_src: '/value1.png',
    img_alt: 'value-1',
    title: '努力・成長',
    description:
      '何事でも時間をかけて取り組めば上位に入れると信じています。様々な失敗や成功経験により、努力次第で成長できると考えています。',
  },
  {
    img_src: '/value2.png',
    img_alt: 'value-2',
    title: '客観的な視点を持つことを重視',
    description:
      '主観的な視点で自分が満足していても、それが他者に評価されなければ意味がないと考えているので客観的な視点を持つことで、周囲が本当に求めていることを理解できるようになると考えています。',
  },
  {
    img_src: '/value3.png',
    img_alt: 'value-3',
    title: '知識',
    description:
      '新たらしい知識を得ることをとても楽しんでいます。書店などで自分の知らない知識を学ぶことが楽しく、いつもワクワクしながら活用しています。仕事面では、今後トレンドになりそうな技術を幅広く取り入れていきたいと考えています。',
  },
];

export default function Values() {
  return (
    <div className='mx-auto'>
      <section className='flex flex-col pt-8 pb-16 mx-12 lg:mx-0 text-center' id='value'>
        <div className='mx-auto max-w-screen-lg bg-white'>
          <Title japaneseTitle='価値観' englishTitle='Values' position='justify-center'></Title>
          <div className='flex py-8 px-4 divide-x-2 divide-border-greenlight'>
            {values.map((value) => (
              <>
                <Card
                  img_src={value.img_src}
                  img_alt={value.img_alt}
                  title={value.title}
                  description={value.description}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
