import { useNavigate, Outlet } from 'react-router-dom'

const routeList = [
  {name: '项目', path: '/product'}
]

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen  flex flex-col'>
      <header className='flex h-20 justify-center bg-slate-500'>
        <div className='container h-full flex justify-between items-center p-5'>
          <div className='cursor-pointer' onClick={() => navigate('/home')}>Home</div>
          <div className='flex justify-around'>
            {
              routeList.map((item) => <p onClick={() => navigate(item.path)} className='cursor-pointer'>{item.name}</p>)
            }
          </div>
          <div>setting</div>
        </div>
      </header>
      <div className='flex-1 flex justify-center bg-orange-200'>
        <div className='container flex-1'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

