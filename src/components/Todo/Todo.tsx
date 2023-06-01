import { useCallback, useState } from "react";
import Todos from "./components/Todos";
interface Itodos {
  name: string;
  isDone: boolean;
  isEdit: boolean;
  // 保存状态 在save时在更新
}

const Todo = () => {
  const [todos, setTodos] = useState<Itodos[]>([]);
  const [value, setValue] = useState("");

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
      <h1>todolist</h1>
      <input
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <button onClick={handlerAdd}>add</button>
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
