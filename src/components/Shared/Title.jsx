export default function Title(props) {
  return (
    <div className={'flex gap-2 mx-0 mb-5 font-bold ' + props.position}>
      <h3 className='text-2xl text-black'>{props.japaneseTitle}</h3>
      <p className='my-auto text-sm text-green uppercase'>{props.englishTitle}</p>
    </div>
  );
}
