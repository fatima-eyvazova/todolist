import React, { useState } from 'react'
import * as uuid from "uuid";
import '../Adtodo/index.scss'

const AdTodo = ({ todo, setTodo }) => {
    const [value, setValue] = useState('');
    function saveTodo() {
        if (value.trim()) {
            setTodo(
                [...todo, {
                    id: uuid.v4(),
                    title: value,
                    status: true
                }]
            )
        }

        setValue('')
    }


    return (
        <div className='adTodo'>
            <input placeholder='Enter a task...' value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={saveTodo}>Add</button>
        </div>
    )
}

export default AdTodo