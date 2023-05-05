import ExpenseItem from "./ExpenseItem"
import { useGlobalContext } from "../store/context"

const ExpenseList = () => {
    const { expenses } = useGlobalContext()
    return (
        <ul className="list-group">
            {
                expenses.map(item => <ExpenseItem key={item.id} {...item} />)
            }
        </ul>
    )
}

export default ExpenseList