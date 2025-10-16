import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './layout/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/LogIn/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import Privecy from './components/Privecy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/registration',
        Component: Registration
      },
      {
        path: '/privecy',
        Component: Privecy
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
