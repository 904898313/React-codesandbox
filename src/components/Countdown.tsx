import { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    let timer = count > 0 && setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => {
      if(typeof timer == 'number') clearInterval(timer);
    };
  }, [count]);

  const reset = () => {
    setCount(5)
  };

  return (
    <>
      <h1>倒计时</h1>
      <h2>{count ? count : '时间到'}</h2>
      <button onClick={reset} className="w-20 h-10 bg-lime-500 rounded-md border-orange-600 text-red-900 font">重置</button>
    </>
  );
};

export default Countdown;
