import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Navigation, Title} from './comps.jsx'
import './index.css'

export function App(){
  return(
    <>
        <Navigation />
        <Title />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
