// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const rootReducers = combineReducers({

})

const store = configureStore({
  reducer: rootReducers,
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
  </>,
)
