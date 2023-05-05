import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Budget from "./components/Budget"
import Remaining from "./components/Remaining"
import ExpenseTotal from "./components/ExpenseTotal"
import ExpenseList from "./components/ExpenseList"
import AddExpenseForm from "./components/AddExpenseForm"
import { useGlobalContext } from "./store/context"

function App() {
  const { expenses } = useGlobalContext()

  return (
    <div className="container">
      <h1 className="mt-3 text-center">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      {expenses.length ? (
        <>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
        </>
      ) : null}
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  )
}

export default App
