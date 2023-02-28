import React, { useState } from 'react'
import style from './index.scss'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import { FaLockOpen, FaLock } from 'react-icons/fa'
import { AiFillFileAdd } from 'react-icons/ai'

const TodoList = ({ todo, setTodo }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [color, setColor] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }



    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {

            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)


    }
    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }


    return (
        <div className='todoList'>{
            todo.map(item => (
                <div className='counter' key={item.id}>
                    <div className='counter-child'>
                        {edit == item.id ?
                            <div className='input-edit' >
                                <input value={value} onChange={(e) => setValue(e.target.value)} />
                            </div> :
                            <div style={{ color: item?.status ? 'black' : 'gray', textDecoration: item?.status ? 'none' : 'line-through' }}>{item.title}</div>
                        }

                        {
                            edit == item.id ?
                                <div className='buttons'>
                                    <div className='btn'>
                                        <button onClick={() => saveTodo(item.id)}><AiFillFileAdd size={15} /></button>
                                    </div>
                                </div> :
                                <div className='buttons-click'>
                                    <div className='btn'>
                                        <button onClick={() => deleteTodo(item.id)}><RiDeleteBin5Fill size={15} /></button>
                                    </div>
                                    <div className='btn'>
                                        <button onClick={() => editTodo(item.id, item.title)} ><BiEdit size={16} /></button>
                                    </div>
                                    <div className='btn'>
                                        <button onClick={() => statusTodo(item.id)}>
                                            {
                                                item.status ? <FaLockOpen size={15} /> : <FaLock size={15} />
                                            }
                                        </button>
                                    </div>
                                </div>
                        }
                    </div >
                </div>
            ))
        }
        </div >
    )
}

export default TodoList