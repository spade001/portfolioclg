import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './first-page/navbar/index.jsx'
import Profilecard from './first-page/main/index.jsx'
import About from './first-page/about/index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Nav/>
   <Profilecard/>
   <About/>
  </StrictMode>,
)  
