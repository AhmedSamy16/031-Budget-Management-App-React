import { useGlobalContext } from "../store/context"

const Remaining = () => {
    const { budget, totalSpent } = useGlobalContext()

    const remaining = budget - totalSpent
    const alertType = remaining <= 0 ? 'alert-danger' : 'alert-success'

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${remaining}
            </span>
        </div>
    )
}

export default Remaining