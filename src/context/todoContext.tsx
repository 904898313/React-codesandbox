import React,{ createContext, useState } from 'react';

export const todoContext = createContext({})

interface ItodoItem {
    value: string,
    isDone: false,
    isEdit: false
}

interface ItodoAction {
    todos: ItodoItem[]
}

const todoContextProvider = (props:{children: React.ReactNode}) => {

    const todoAction:ItodoAction = {
        todos: [{
            value: 'x',
            isDone: false,
            isEdit: false
        }]
    }

    return (
        <todoContext.Provider value={todoAction}>
            {props.children}
        </todoContext.Provider>
    )
}

export default todoContextProvider