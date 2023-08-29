/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2023-08-29 18:12:23
 * @LastEditors: yangchenguang
 * @LastEditTime: 2023-08-29 18:51:26
 */

import React,{ createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalstorage';

export const todoContext = createContext({})

interface ItodoItem {
    value: string,
    isDone: false,
    isEdit: false
}

interface ItodoAction {
    todos: ItodoItem[],
    addTodo: (value:ItodoItem) => void
}

interface Iprops {
    children: React.ReactNode
}

const todoContextProvider = (props:Iprops) => {

    const [todos, setTodos] = useLocalStorage<ItodoItem[]>('todos',[])

    const todoAction:ItodoAction = {
        todos: todos,
        addTodo: (todoItem) => {
            setTodos(v => [...v,todoItem])
        }
    }

    return (
        <todoContext.Provider value={todoAction}>
            {props.children}
        </todoContext.Provider>
    )
}

export default todoContextProvider