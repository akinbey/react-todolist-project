import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css';
import { FaCheck } from "react-icons/fa";



function Todo({ todo, akin, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    //! id ile silme
    const removeTodo = () => {
        akin(id);
    }
    //! güncelleme
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px'
        }}>
            < div >
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                        style={{ width: '380px' }}
                        className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                {/* remove iconuna işlev atanıyor */}
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />

                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} />  //! güncelleme onayı

                        : <FaEdit className='todo-icons' onClick={() => setEditable(true)} /> //! düzenleme
                }
            </div>
        </ div>
    )
}

export default Todo