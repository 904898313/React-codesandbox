

/*
 * @Author: yangchenguang
 * @Description: 根组件
 * @Date: 2023-07-07 15:51:45
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-14 11:03:54
 */

import "./index.css";

import { RouterProvider } from "react-router-dom"; // 路由提供者
import { router } from './router/index'
import TodoContextProvider from "./context/todoContext";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </TodoContextProvider>
    </div>
  );
}

export default App;
