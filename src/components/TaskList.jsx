import { Task } from "./Task"

export function TaskList({ data, setData }) {
    return (
        <ul className="todo-list">
            {data.map((item) => {
                return <Task key={ item.id } item={ item } setData={ setData } />
            })}
        </ul>
    )
}