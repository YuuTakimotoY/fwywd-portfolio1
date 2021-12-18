export default function Title(props) {
  return (
    <div className={'flex space-x-2 mx-0 my-8 font-bold ' + props.position}>
      <h3 className='text-[28px] text-black'>{props.japaneseTitle}</h3>
      <p className='my-auto text-[18px] text-green uppercase'>{props.englishTitle}</p>
    </div>
  );
}
