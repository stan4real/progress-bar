import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './Home.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <Home />
    </Provider>
  </React.StrictMode>,
)
