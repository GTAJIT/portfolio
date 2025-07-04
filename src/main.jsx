import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Landing, About, Projects, Contact} from './pages/pages.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Landing/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/projects",
        element: <Projects/>,
        children: [
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
