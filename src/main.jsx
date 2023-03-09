import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//insert the ReactRouter wrapper around the app in here, remove strictmode. strictmode is for development builds only, once read to build to production, 
  // you should remove <React.Strictmode>