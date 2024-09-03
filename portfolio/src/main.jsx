import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Navigation, Title, About, Education, Projects, Skills} from './comps.jsx'
import './index.css'

export function App(){
  return(
    <>
        <Navigation />
        <Title />
        <About/>
        <Education/>
        <Projects/>
        <Skills/>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
