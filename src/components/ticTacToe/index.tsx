/*
 * @Author: yangchenguang
 * @Description: 井字棋
 * @Date: 2023-08-30 14:46:41
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-31 09:10:58
 */

import { useState, useCallback, memo } from "react";

// 棋格
const Square = ({
    piece,
    index,
    setPiece,
}: {
    piece: string;
    index: number;
    setPiece: (index: number) => void;
}) => {
    return (
        <div
            onClick={() => setPiece(index)}
            className="flex w-[33.33%] aspect-square justify-center items-center border border-indigo-400"
        >
            {piece}
        </div>
    );
};

// 棋盘
const board = memo(() => {
    // 九个棋格的内容
    const [squareList, SetSquareList] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    // 该谁下了 || 默认谁下
    const [defaultX, setDefaultX] = useState(true);

    // 时间回溯
    const [backInTimeList, setBackInTimeList] = useState<string[][]>([['','','','','','','','','',]]);

    // 点击棋子
    const setPiece = useCallback(
        (index: number) => {
            // 如果已经有棋子了 || 游戏结束 就不让在下了
            if (squareList[index] || isOver(squareList)) return;

            // 下子
            const copyArr = squareList.slice();
            copyArr[index] = defaultX ? "❌" : "✔";
            SetSquareList(copyArr);

            // 记录时间回溯
            setBackInTimeList((e) => {
                const eCopy = e.slice();
                eCopy.push(copyArr);
                return eCopy;
            });

            // 切换落子者
            setDefaultX((e) => !e);
        },
        [squareList, defaultX, backInTimeList]
    );

    // 实现时间回溯
    const backInTime = (index: number) => {
        SetSquareList(backInTimeList[index]);
        const copyArr = backInTimeList.slice(0, index + 1);
        setBackInTimeList(copyArr);
        // 设置 下子者
        console.log(copyArr,"copyArr");
        setDefaultX(copyArr.length % 2 ? true : false)
    };

    let str;
    if (isOver(squareList)) {
        str = `${isOver(squareList)} 胜利了`;
    }

    return (
        <div className="flex">
            {/* 棋盘 */}
            <div className="flex w-32 h-32 flex-wrap border border-indigo-400">
                {squareList.map((item, index) => {
                    return (
                        <Square
                            piece={item}
                            index={index}
                            setPiece={setPiece}
                            key={index}
                        />
                    );
                })}
            </div>
            {/* 时间回溯 */}
            <BackInTime backInTimeList={backInTimeList} backInTime={backInTime} />
            {/* 宣布胜利 */}
            {str && <h1 className="text-green-400 mx-2">{str}</h1>}
        </div>
    );
});

// 时间回溯
const BackInTime = ({
    backInTimeList,
    backInTime,
}: {
    backInTimeList: string[][];
    backInTime: (num: number) => void;
}) => {
    return (
        <>
            {!!backInTimeList.length && (
                <div className="mx-2">
                    <h1 className="text-green-400 text-center">时间回溯</h1>
                    <ul>
                        {backInTimeList.map((item, index) => {
                            return (
                                <li
                                    onClick={() => backInTime(index)}
                                    className="my-1"
                                    key={index}
                                >
                                    <button className="btn btn-active btn-link text-blue-600 min-h-0 h-4">
                                        {index ? `go to move #${index}` : "go to move beginning"}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};

// 判断游戏是否结束
const isOver = (squareList: string[]): string | boolean => {
    const gameOverCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < gameOverCondition.length; i++) {
        const [a, b, c] = gameOverCondition[i];
        if (
            squareList[a] &&
            squareList[a] === squareList[b] &&
            squareList[a] === squareList[c]
        ) {
            return squareList[a];
        }
    }
    return false;
};

export default board;
