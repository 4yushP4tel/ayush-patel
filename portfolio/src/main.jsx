import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Navigation, Title, About, Education} from './comps.jsx'
import './index.css'

export function App(){
  return(
    <>
        <Navigation />
        <Title />
        <About/>
        <Education/>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
