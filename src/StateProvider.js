import React, { createContext, useReducer, useContext } from 'react'

const StateContext = createContext()


const StateProvider = ({ initialState, reducer, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>)
}

export default StateProvider

export const useStateValue = () => useContext(StateContext)