

/*
 * @Author: yangchenguang
 * @Description: todoList 代办列表
 * @Date: 2023-07-07 15:51:45
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 16:02:03
 */

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
        <li key={index} className="my-2">
          {item.isEdit ? (
            <input
              value={item.name}
              onInput={(e) =>
                liChangeHandler((e.target as HTMLInputElement).value, index)
              }
            />
          ) : (
            <span className={item.isDone ? "line-through" : ""}>{item.name}</span>
          )}
          <button className="btn btn-success min-h-[20px] h-7 mx-1" onClick={() => handlerEdit(index)} disabled={item.isDone}>
            {item.isEdit ? "save" : "edit"}
          </button>
          <button className="btn btn-warning min-h-[20px] h-7 mx-1" onClick={() => handlerDone(index)} disabled={item.isEdit}>
            {item.isDone ? "setUndone" : "setDone"}
          </button>
          <button className="btn btn-error min-h-[20px] h-7 mx-1" onClick={() => handlerDelete(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default memo(Li);
