import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/router'
import { RouterProvider } from 'react-router'
import AuthProvider from './provider/AuthProvider'
// import App from './App.jsx'


// import React from "react";

// import { createBrowserRouter , RouterProvider  } from "react-router";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    
<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>

  </StrictMode>,
)
