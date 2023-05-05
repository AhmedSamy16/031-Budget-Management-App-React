import { useGlobalContext } from "../store/context"

const Budget = () => {
    const { budget } = useGlobalContext()
    return (
        <div className="alert alert-secondary">
            <span>
                Budget: ${budget}
            </span>
        </div>
    )
}

export default Budget