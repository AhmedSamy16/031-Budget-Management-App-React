import { useEffect, useRef } from "react"
import { useGlobalContext } from "../store/context"
import { v4 as uuidv4 } from "uuid"
import { ADD_EXPENSE } from "../store/actions"

const AddExpenseForm = () => {
    const { dispatch } = useGlobalContext()

    const nameRef = useRef(null)
    const costRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const addExpense = (e) => {
        e.preventDefault()
        const name = nameRef.current.value.trim()
        const cost = +costRef.current.value.trim()
        if (!name || !cost) return
        const expense = {
            name,
            cost,
            id: uuidv4()
        }
        dispatch({ type: ADD_EXPENSE, payload: expense })
        nameRef.current.value = ''
        costRef.current.value = ''
    }
    return (
        <form onSubmit={addExpense}>
            <div className="row align-items-end">
                <div className="col-sm">
                    <label htmlFor="name">Name:</label>
                    <input type="text" ref={nameRef} className="form-control" id="name" required />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost:</label>
                    <input type="number" ref={costRef} className="form-control" id="cost" required min={1} />
                </div>
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary mt-3">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm