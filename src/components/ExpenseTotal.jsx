import { useGlobalContext } from "../store/context"

const ExpenseTotal = () => {
    const { totalSpent, budget } = useGlobalContext()

    const alertType = totalSpent >= budget ? 'alert-danger' : 'alert-primary'

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Spent So far: ${totalSpent}
            </span>
        </div>
    )
}

export default ExpenseTotal