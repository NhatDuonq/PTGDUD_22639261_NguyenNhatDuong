import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BTBoostrap from './components/BTBoostrap.jsx'
import BaiTap1 from './components/BaiTap1.jsx'
import TodoList from './components/ToDoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <App />
  </StrictMode>,
)
