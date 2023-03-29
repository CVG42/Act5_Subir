import React, { useState } from 'react'

const todoEmpty =

{
    'done': false,
    'description': "",
    'owner': ""
}

export const TodoAdder = ({/*setTodos*/ onAddedTood}) => {
    
    
    const[valorTodo, setValorTodo] = useState(todoEmpty)

    const onSubmitTodo = (event) => {
        event.preventDefault()
        //setTodos((previousTodos) => [...previousTodos,valorTodo])
        onAddedTood(valorTodo)
        setValorTodo(todoEmpty);

    }

    /*const HandleDescription = ({target}) => 
    {
        setValorTodo({...valorTodo,description:target.value})
    
    }

    const HandleOwner = ({target}) => {setValorTodo({...valorTodo,owner:target.value})}*/

    const HandleProperty = ({target},param) =>
    {
        setValorTodo({...valorTodo,[param]:target.value});
    }
    
    return (
    <form onSubmit={onSubmitTodo}>
        <fieldset>
            <legend>Nuevo To-do</legend>
            {/*Descripcion: <input type="text" value={valorTodo.description} onChange={HandleDescription} />*/}
            Descripcion: <input type="text" value={valorTodo.description} onChange={(event) => HandleProperty(event,'description')} />
            <br />
            {/*Descripcion: <input type="text" value={valorTodo.description} onChange={HandleOwner} />*/}
            Propietario: <input type="text" value={valorTodo.owner} onChange={(event) => HandleProperty(event,'owner')} />
            <br />
            <button type='submit'>Añadir</button>
        </fieldset>
    </form>
  )
}
