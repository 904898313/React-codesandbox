

/*
 * @Author: yangchenguang
 * @Description: 路由文件
 * @Date: 2023-07-07 16:20:46
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-07-11 19:04:18
 */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/index";
import Home from '../views/home/index'
import ErrorPage from '../views/errorPage/index'
import Product from '../views/product/index'

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/product",
				element: <Product />,
			}
		]
	}
]);