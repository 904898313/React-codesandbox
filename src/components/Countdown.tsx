import useCount from "../hooks/useCount";

const Countdown = () => {
  const {count, isActive, setIsActive, reset} = useCount(10,1000)

  return (
    <>
      <h1>倒计时</h1>
      <h2>{count ? count : '时间到'}</h2>
      <button onClick={() => reset()} className="btn btn-success min-h-[20px] h-7 mx-1">重置</button>
      <button onClick={() => reset(5)} className="btn btn-success min-h-[20px] h-7 mx-1">重置为5</button>
      <button onClick={() => setIsActive(!isActive)} className="btn btn-success min-h-[20px] h-7 mx-1">
        { isActive ? 'stop' : 'start' }
      </button>
    </>
  );
};

export default Countdown;
