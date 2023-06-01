import { useEffect, useRef, useState } from "react";

const Countdown: React.FC = () => {
  const [count, setCount] = useState<number>(5);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((count) => count - 1);
      if (count <= 1) {
        clearInterval(timerRef.current!);
      }
    }, 1000);
    return () => {
      clearInterval(timerRef.current!);
    };
  }, [count]);

  const reset = () => {
    clearInterval(timerRef.current!);
    setCount(5);
  };

  return (
    <>
      <h1>倒计时</h1>
      <h2>{count}</h2>
      <button onClick={reset}>重置</button>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </>
  );
};

export default Countdown;
