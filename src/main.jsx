import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import UtilityPage from './pages/UtilityPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element : <HomePage/>
      },
      {
        path : 'about',
        element : <UtilityPage/>
      },
      {
        path: 'properties',
        element: <UtilityPage />
      },
      {
        path: 'services',
        element: <UtilityPage />
      },
      {
        path: 'contact',
        element: <UtilityPage />
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
