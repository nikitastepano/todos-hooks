import { useState } from "react"

let idCount = 0

export function NewTaskForm({ setData }) {

    const [value, setValue] = useState('')

    const onChangeInput = (event) => {
        setValue(event.target.value)
    }

    const addItem = (event) => {
        event.preventDefault();
        if (value.trim() === '') return;
        setData((data) => [...data, {
            id: ++idCount,
            text: value,
            completed: false,
            hidden: false,
            date: new Date()
        }])
        setValue('');
    } 

    return (
        <form className="header" onSubmit={ addItem }>
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus id='new-todo' value={ value } onChange={ onChangeInput }/>
        </form>
    )
}