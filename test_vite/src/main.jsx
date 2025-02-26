import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BTBoostrap from './Lab1/BTBoostrap.jsx'
import BaiTap1 from './Lab1/BaiTap1.jsx'
import TodoList from './Lab1/ToDoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <App />
  </StrictMode>,
)
