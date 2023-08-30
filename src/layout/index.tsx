/*
 * @Author: yangchenguang
 * @Description: layout 布局页面
 * @Date: 2023-08-29 18:12:23
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 15:35:51
 */

import { useNavigate, Outlet } from 'react-router-dom'

const routeList = [
  {name: '项目', path: '/product'}
]

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen  flex flex-col'>
      <header className='flex h-20 justify-between items-center bg-slate-500 p-5'>
        <h1 className='cursor-pointer font-black' onClick={() => navigate('/home')}>Home</h1>
        <div className='flex justify-around'>
          {
            routeList.map((item) => <h1 onClick={() => navigate(item.path)} className='cursor-pointer font-black' key={item.path}>{item.name}</h1>)
          }
        </div>
        <h1 className='font-black'>setting</h1>
      </header>
      <div className='flex-1 flex justify-center bg-orange-200'>
        <div className='container flex-1 bg-orange-200'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

