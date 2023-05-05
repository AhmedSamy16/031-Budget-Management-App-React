import { ADD_EXPENSE, CALC_TOTAL, DELETE_EXPENSE } from "./actions"

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_EXPENSE :
            return { ...state, expenses: [...state.expenses, action.payload] }
        case CALC_TOTAL :
            const newTotal = state.expenses.reduce((prev, curr) => {
                return prev + curr.cost
            }, 0)
            return { ...state, totalSpent: newTotal }
        case DELETE_EXPENSE :
            const newExpenses = state.expenses.filter(item => item.id !== action.payload.id)
            return { ...state, expenses: newExpenses }
        default :
            return state
    }
}

export default reducer