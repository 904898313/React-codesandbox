

/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2023-07-07 15:51:45
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 16:01:28
 */

import { useCallback, useState, useContext } from "react";
import Todos from "./components/Todos";
import { todoContext } from "../../context/todoContext";

interface Itodos {
  name: string;
  isDone: boolean;
  isEdit: boolean;
  // 保存状态 在save时在更新
}

const Todo = () => {
  const [todos, setTodos] = useState<Itodos[]>([]);
  const [value, setValue] = useState("");
  const todo = useContext(todoContext);
  console.log(todo,"todo");

  // 添加
  const handlerAdd = useCallback(() => {
    setTodos([...todos, { name: value, isDone: false, isEdit: false }]);
    setValue("");
  }, [todos, value]);

  // 删除
  const handlerDelete = useCallback(
    (index: number) => {
      setTodos(todos.filter((item, i) => i !== index));
    },
    [todos]
  );

  // 编辑
  const handlerEdit = useCallback(
    (index: number) => {
      const copyTodos = [...todos];
      copyTodos[index].isEdit = !copyTodos[index].isEdit;
      setTodos(copyTodos);
    },
    [todos]
  );

  // 编辑 input的change事件
  const liChangeHandler = useCallback(
    (value: string, index: number) => {
      const copyTodos = [...todos];
      copyTodos[index] = {
        ...copyTodos[index],
        name: value,
      };
      setTodos(copyTodos);
    },
    [todos]
  );

  // done handler
  const handlerDone = useCallback(
    (index: number) => {
      const copyTodos = [...todos];
      copyTodos[index].isDone = !copyTodos[index].isDone;
      setTodos(copyTodos);
    },
    [todos]
  );

  return (
    <>
      <input
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <button className="btn btn-success min-h-[20px] h-7 mx-1" onClick={handlerAdd}>add</button>
      <Todos
        todos={todos}
        liChangeHandler={liChangeHandler}
        handlerEdit={handlerEdit}
        handlerDone={handlerDone}
        handlerDelete={handlerDelete}
      />
    </>
  );
};

export default Todo;
