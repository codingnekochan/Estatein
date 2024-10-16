import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import UtilityPage from './pages/UtilityPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PropertiesPage from './pages/PropertiesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

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
        element : <AboutPage/>
      },
      {
        path: 'properties',
        element: <PropertiesPage/>
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'contact',
        element: <ContactPage/>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
