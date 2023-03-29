import React from 'react'

export const TodoElement = ({id,done,description,owner}) => {
  return (
    <div>
        <input type="checkbox" id={id} name={owner} defaultChecked={done} />
        <p className='todo-p'>{description}</p>
        <p><i>{owner}</i></p>
        <hr />
    </div>
  )
}
