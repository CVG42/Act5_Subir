import React, { useState } from 'react'
import { TodoElement } from './TodoElement';
import { TodoAdder } from './TodoAdder';

const  InitialTodoList = [
    {
        'done': false,
        'description': "Hacer la tarea de adjetivos",
        'owner': "Fernando"
    },
    {
        'done': false,
        'description': "Bailar la bamba",
        'owner': "Grupo musical"
    }
]

export const ToDoApp = () => {

    const [Todos, setTodos] = useState(InitialTodoList);
    console.log(Todos);
    const addTodo = (newTodo) => {setTodos([...Todos,newTodo])}

  return (
    <>
        <h1>ToDoApp</h1>
        <hr />

        {
            Todos.map(({done,owner,description},index)=>
            {
                return(
                    <TodoElement 
                    done={done}
                    owner={owner}
                    description={description}
                    id={index}
                    key={index}
                    />
                );
            }
            )
        }

        <TodoAdder 
            //setTodos={setTodos}
            onAddedTood = {(newTodo) => addTodo(newTodo)}
        />
    </>
  )
}
