import React from 'react'
import ReactDOM from 'react-dom/client'
//import { ToDoApp } from './ToDoApp'
//import { FetchApp } from './FetchApp'
import { AppRouter } from './router/AppRouter'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<ToDoApp />*/}
    {/*<FetchApp />*/}
    <BrowserRouter>
      <AppRouter /> 
    </BrowserRouter> 
  </React.StrictMode>,
)
