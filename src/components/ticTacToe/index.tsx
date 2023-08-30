

/*
 * @Author: yangchenguang
 * @Description: 井字棋
 * @Date: 2023-08-30 14:46:41
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-30 17:08:57
 */

import { useState, useCallback, memo } from 'react';

const Square = memo(({piece,index,setPiece}: {piece:string,index:number,setPiece:(index:number) => void}) => {
    return <div onClick={() => setPiece(index)} className='flex w-[33.33%] aspect-square justify-center items-center border border-indigo-400'>
        {piece}
    </div>
})

const board = () => {
    // 九个棋格的内容
    const [squareList, SetSquareList] = useState(["","","","","","","","","",])

    // 该谁下了 || 默认谁下
    const [defaultX, setDefaultX] = useState(true)

    // 
    
    // 点击设置棋子
    const setPiece = useCallback((index: number) => {
        // 如果已经有棋子了 || 游戏结束 就不让在下了
        if(squareList[index] || isOver(squareList)) return ;
        
        const copyArr = squareList.slice();
        copyArr[index] = defaultX ? '❌' : '✔'
        SetSquareList(copyArr)
        setDefaultX(e => !e)
    }, [squareList, defaultX])

    let str
    if(isOver(squareList)) {
        str = `${isOver(squareList)} 胜利了`
    } 

    return <div className='flex'>
        <div className='flex w-32 h-32 flex-wrap border border-indigo-400'>
            {
                squareList.map((item, index) => {
                    return <Square piece={item} index={index} setPiece={setPiece} key={index}/>
                })
            }
        </div>
        {str && <h1 className='text-green-400 mx-2'>{str}</h1>}
    </div>
    
}

const isOver = (squareList: string[]):string | boolean => {
    const gameOverCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < gameOverCondition.length; i++) {
        const [a,b,c] = gameOverCondition[i];
        if(squareList[a] && squareList[a] === squareList[b] && squareList[a] === squareList[c]) {
            return squareList[a]
        }
    }
    return false
}

export default board