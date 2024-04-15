import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ onCreateTodo }) {


    //! yeni todo girisi yapıldıktan sonra newTodo state'inde tutuluyor
    const [newTodo, setNewTodo] = useState('');

    //! input girisi yapıldıktan sonra input text temizlenir
    const clearInput = () => {
        setNewTodo('');
    }

    //! todo olusturma şartı ve içeriği
    const createTodo = () => {
        if (!newTodo) return; //! todo varsa devam et yoksa return ile sonlandır

        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} //! inputun içeriği
                className='todo-input' type="text" placeholder='Todo giriniz' />
            <button onClick={createTodo} className='todo-create-button'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate