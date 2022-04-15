import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PopupProvider } from '@caminkunick/react-popup-box'

ReactDOM.render(
  <PopupProvider>
    <App />
  </PopupProvider>,
  document.getElementById('root')
)
