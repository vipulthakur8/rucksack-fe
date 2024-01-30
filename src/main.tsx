// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from './store/uiReducer.ts';

const rootReducers = combineReducers({
  ui: uiReducer
})

const store = configureStore({
  reducer: rootReducers,
})


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
