import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Welcome } from './pages/welcome/Welcome';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: '/welcome',
    element: <Welcome/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
