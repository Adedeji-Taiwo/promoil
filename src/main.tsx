import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { WiizzkidProvider} from './context/index.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
      <WiizzkidProvider>
              <App />
    </WiizzkidProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
