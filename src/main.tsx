import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { WiizzkidProvider} from './context/index.js';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <WiizzkidProvider>
              <App />
    </WiizzkidProvider>
  </React.StrictMode>,
)
