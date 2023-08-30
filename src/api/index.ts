/*
 * @Author: yangchenguang
 * @Description: 请求封装
 * @Date: 2023-08-29 18:54:10
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 12:21:21
 */

import axios, { AxiosResponse } from "axios";

const instance = axios.create({
	baseURL: "https://test/api/",
	timeout: 50000,
});

// 请求拦截
instance.interceptors.request.use(
	function (config) {
		console.log("请求之前");
		// 在发送请求之前做些什么
		return config;
	},
	function (error) {
		console.log("请求之前 请求失败");
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
instance.interceptors.response.use(
	function (response) {
		console.log("响应之后");
		// 对响应数据做点什么
		return response;
	},
	function (error) {
		console.log("响应之后 响应失败");
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

export const get = (
	url: string,
	config?: object
): Promise<AxiosResponse<any, any>> => {
	return instance.get(url, config);
};

export const post = (
	url: string,
	data?: any,
	config?: object
): Promise<AxiosResponse<any, any>> => {
	return instance.post(url, data, config);
};
