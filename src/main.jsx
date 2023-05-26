import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './style.css'
import router from './Routes/Routes'
import AuthProvider from './AuthProvider/Authprovider'


ReactDOM.createRoot(document.getElementById('root')).render(<AuthProvider><RouterProvider router={router} /></AuthProvider>)