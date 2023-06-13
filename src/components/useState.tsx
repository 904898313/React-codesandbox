import { useCallback, useState } from 'react'

const UseState = () => {
  const [arr, setArr] = useState([1])

  const add = useCallback(() => {
    // √
    setArr([...arr,arr.length+1])
    // ❌
    // arr.push(arr.length+1)
    // setArr(arr)

    // 必须返回新的引用 object同理
  },[arr])

  return (
    <>
      <h1>useState array update</h1>
      <ul>
        {
          arr.map(i => <li key={i}>{i}</li>)
        }
      </ul>
      <button onClick={add}>add</button>
    </>
  )
}

export default UseState