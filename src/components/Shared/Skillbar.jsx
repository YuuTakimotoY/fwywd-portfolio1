export default function Skillbar(props) {
  return (
    <div className='mx-4'>
      <p className='font-bold text-left text-green'>{props.name}</p>
      <div className='flex flex-row'>
        <div className='flex overflow-hidden flex-auto my-auto h-4 text-xs bg-progress-light rounded'>
          <div
            style={{ width: props.progress + '%' }}
            className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-progress-dark shadow-none'
          ></div>
        </div>
        <p className='mx-4 w-4 text-sm font-bold text-center text-green'>{props.progress}%</p>
      </div>
    </div>
  );
}
