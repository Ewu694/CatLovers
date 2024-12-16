import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/pages/Home.jsx'
import Login from '../src/pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not a Page</div>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>404 Not a Page</div>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
