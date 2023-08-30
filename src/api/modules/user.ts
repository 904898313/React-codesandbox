

/*
 * @Author: yangchenguang
 * @Description: 用户Api
 * @Date: 2023-08-29 20:02:18
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 12:22:36
 */

import { get, post } from "../index"

// login
export const login = (params: any) => {
    post('/testLogin', params)
}