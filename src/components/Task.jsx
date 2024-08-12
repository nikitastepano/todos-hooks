import { useState, useEffect } from 'react';

import { formatDistanceToNowStrict } from 'date-fns'


export function Task({ item, setData }) {

    const [formattedDate, setFormattedDate] = useState(formatDistanceToNowStrict(item.date));

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedDate(formatDistanceToNowStrict(item.date));
        }, 1000);
        return () => clearInterval(interval);
    }, [item.date]);

    const changeCompleted = () => {
        setData((data) => 
            data.map((task) =>
                task.id === item.id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteItem = () => {
        setData((data) =>
            data.filter((task) => task.id !== item.id)
        );
    };

    return (
        <li className={ `${item.completed ? 'completed' : ''} ${item.hidden ? 'hidden' : ''}` }>
            <div className="view">
                <input className="toggle" 
                       type="checkbox" 
                       id={ item.id } 
                       checked={ item.completed } 
                       onChange={ changeCompleted } 
                />
                <label htmlFor={ item.id }>
                    <span className="description">{ item.text }</span>
                    <span className="created">created {formattedDate} ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={deleteItem}></button>
            </div>
        </li>
    );
}