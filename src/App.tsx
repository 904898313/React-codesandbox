

/*
 * @Author: yangchenguang
 * @Description: 根组件
 * @Date: 2023-07-07 15:51:45
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-07-10 08:49:17
 */

import "./index.css";

import { RouterProvider } from "react-router-dom"; // 路由提供者
import { router } from './router/index'

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
