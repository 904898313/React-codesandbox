import useCount from "../hooks/useCount";

const Countdown = () => {
  const {count, isActive, setIsActive, reset} = useCount(10,1000)

  return (
    <>
      <h1>倒计时</h1>
      <h2>{count ? count : '时间到'}</h2>
      <button onClick={() => reset()} className="w-20 h-10 bg-lime-500 rounded-md border-orange-600 text-red-900">重置</button>
      <button onClick={() => reset(5)} className="w-20 h-10 bg-lime-500 rounded-md border-orange-600 text-red-900">重置为5</button>
      <button onClick={() => setIsActive(!isActive)} className="w-20 h-10 bg-lime-500 rounded-md border-orange-600 text-red-900">
        { isActive ? 'stop' : 'start' }
      </button>
    </>
  );
};

export default Countdown;
