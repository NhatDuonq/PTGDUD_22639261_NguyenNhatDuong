import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BTBoostrap from './components/BTBoostrap.jsx'
import BaiTap1 from './components/BaiTap1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BaiTap1></BaiTap1>
  </StrictMode>,
)
