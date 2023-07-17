/*
 * @Author: yangchenguang
 * @Description: tailwindcss 配置
 * @Date: 2023-07-07 15:51:45
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-07-17 15:01:06
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
