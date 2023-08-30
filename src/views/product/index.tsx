

/*
 * @Author: yangchenguang
 * @Description: 项目页面
 * @Date: 2023-07-11 19:03:42
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 15:51:03
 */

import Todo from '../../components/Todo/Todo'
import UseLocalStorageDome from '../../components/useLocalStorageDome.tsx'
import Countdown from '../../components/Countdown'
import TicTacToe from '../../components/ticTacToe/index'

export default function Example() {
  return (
    <div>
      <div className="px-4 sm:px-0 flex items-center my-4">
        <h3 className="text-base font-semibold leading-7 text-green-400">项目列表</h3>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-400">useCount hook</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Countdown></Countdown></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-400">todoList（代办事项）</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Todo></Todo></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-green-400">useLocalStorage hook</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <UseLocalStorageDome></UseLocalStorageDome>
              刷新后取缓存
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-orange-400">Tic Tac Toe （井字棋游戏）ing...</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><TicTacToe /></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-red-400">推箱子</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Sokoban game...</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-red-400">推箱子</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Sokoban game...</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
