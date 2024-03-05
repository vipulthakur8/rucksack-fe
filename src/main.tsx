// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from './store/uiReducer.ts';
import authReducer from './store/authReducer.ts';
import userReducer from './store/userReducer.ts';

const rootReducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  user: userReducer
})

const store = configureStore({
  reducer: rootReducers,
})


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
