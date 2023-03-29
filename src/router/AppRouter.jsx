import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FetchApp } from '../FetchApp'
import { NavBar } from '../Helper/NavBar'
import { ToDoApp } from '../ToDoApp'


const ExampleComp = () => {
    return(
        <>
            <h1>Hola soy el mainPage</h1>
            <p>Me estoy renderizando desde el router</p>
        </>
    )
}
export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='/*' element={<ExampleComp/>}/>
            <Route path='/todoapp' element={<ToDoApp/>}/>
            <Route path='/fetchapp' element={<FetchApp/>}/>
        </Routes>   
    </>
  )
}

