import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './input.css'
import './output.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name={''} image={''} status={''} gender={''} location={''} origin={''} species={''} />
  </StrictMode>,
)
