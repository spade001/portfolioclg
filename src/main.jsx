import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './first-page/navbar/index.jsx'
import Profilecard from './first-page/main/index.jsx'
import Line from './first-page/line/index.jsx'
import About from './first-page/about.jsx'
import Contact from './first-page/contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Nav/>
   <Profilecard/>
   <Line title="about"/>
   <About/>
   <Line title="contact"/>
   <Contact/>
  </StrictMode>,
)  
