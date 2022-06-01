import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//01 we import the store we created and the provider from redux
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* 01 we pass the store as a provider in order to access the data from the store in the whole app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
