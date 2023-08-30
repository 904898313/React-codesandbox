

/*
 * @Author: yangchenguang
 * @Description: 路由文件
 * @Date: 2023-07-07 16:20:46
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 12:12:03
 */

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/index";
import Home from '../views/home/index'
import ErrorPage from '../views/errorPage/index'
import Product from '../views/product/index'

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		element: <Layout />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/product",
				element: <Product />,
			},
		]
	},
	{
		path: '/404',
		element: <ErrorPage />
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
]);