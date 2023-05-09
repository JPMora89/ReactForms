import React, {useState} from 'react';
import NewToDoForm from './NewToDoForm';
import { v4 as uuid } from 'uuid';



const ToDoList = () => {


    const initialState = [];
    const [todos, setTodos] = useState(initialState);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }]);
    };

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    // const todoComponents = todos.map(todo => (
    //     <div >
    //         <li key={todo.id}>{todo.task}</li>
    //         <button onClick={() => removeTodo(todo.id)}>X</button>
    //     </div>
    // ));

    return (
        <div>
            <NewToDoForm addTodo={addTodo} />
            
                {todos.map(todo => (
                    <div key={todo.id}>
                        {todo.task}
                        <button onClick={() => removeTodo(todo.id)}>X</button>

                    </div>
                
                 
                ))}
        
               

            

        </div>


    );


    }

export default ToDoList;