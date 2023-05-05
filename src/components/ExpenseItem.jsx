import { AiFillDelete } from "react-icons/ai"
import { useGlobalContext } from "../store/context"
import { DELETE_EXPENSE } from "../store/actions"

const ExpenseItem = ({ name, cost, id }) => {
    const { dispatch } = useGlobalContext()
    const deleteItem = () => {
        dispatch({ type: DELETE_EXPENSE, payload: { id } })
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <span className="badge bg-primary rounded-pill" style={{ marginRight: '10px' }}>
                    ${cost}
                </span>
                <AiFillDelete onClick={deleteItem} size="1.5em" style={{ cursor: 'pointer' }} />
            </div>
        </li>
    )
}

export default ExpenseItem