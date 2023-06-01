import { memo } from "react";

interface Itodos {
  name: string;
  isDone: boolean;
  isEdit: boolean;
  // 保存状态 在save时在更新
}
interface Iprops {
  todos: Itodos[];
  liChangeHandler: (e: string, index: number) => void;
  handlerEdit: (index: number) => void;
  handlerDone: (index: number) => void;
  handlerDelete: (index: number) => void;
}
const Li = ({
  todos,
  liChangeHandler,
  handlerEdit,
  handlerDone,
  handlerDelete,
}: Iprops) => {
  console.log("重新加载了");
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          {item.isEdit ? (
            <input
              value={item.name}
              onInput={(e) =>
                liChangeHandler((e.target as HTMLInputElement).value, index)
              }
            />
          ) : (
            <span className={item.isDone ? "through" : ""}>{item.name}</span>
          )}
          <button onClick={() => handlerEdit(index)} disabled={item.isDone}>
            {item.isEdit ? "save" : "edit"}
          </button>
          <button onClick={() => handlerDone(index)} disabled={item.isEdit}>
            {item.isDone ? "setUndone" : "setDone"}
          </button>
          <button onClick={() => handlerDelete(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default memo(Li);
