import { useEffect, useRef, useState } from "react";

const useCount = (initialSeconds: number, time:number = 1000) => {
  const [count, setCount] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if(isActive && count > 0) {
      timer.current = setInterval(() => {
        setCount((v) => v-1)
      }, time)
    }
    return () => clearInterval(timer.current as NodeJS.Timeout)
  },[count, isActive])

  // reset 重置时间
  const reset = (Seconds:number = initialSeconds) => {
    setCount(Seconds)
  }

  return {
    count,
    isActive,
    setIsActive,
    reset
  }
}

export default useCount