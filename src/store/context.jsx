import { useContext, createContext, useReducer, useEffect } from "react"
import reducer from "./reducer"
import { CALC_TOTAL } from "./actions"

const initialState = {
    budget: 2000,
    totalSpent: 0,
    expenses: []
}

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: CALC_TOTAL })
    }, [state.expenses])
    return <AppContext.Provider value={{ ...state, dispatch }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}