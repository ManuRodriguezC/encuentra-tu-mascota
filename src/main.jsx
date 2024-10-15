import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pets } from './components/Routes/Pets.jsx'
import App from './App.jsx'
import './index.css'
import { Home } from './components/Home.jsx'
import { Error } from './components/Routes/Error.jsx'

const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<App/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/huellitas',
            element:<Pets/>
          }
        ]
      },
      {
        path:'/error',
        element:<Error/>
      }
    ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
