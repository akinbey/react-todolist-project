import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    const todoItems = Array.isArray(todos) ? todos : []; // dizi olup olmadığını kontrol eder diziyse degıskene atanır, 
    // değilse boş olarak atanır atanır
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todoItems && todoItems.map((todo) => ( //! yukardaki degıskene dizi atandıktan sonra map ile dönüyoruz
                    <Todo key={todo.id} todo={todo} akin={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }

        </div>
    )
}

export default TodoList