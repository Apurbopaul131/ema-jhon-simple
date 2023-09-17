import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Order from './Components/Order/Order.jsx'
import Review from './Components/Review/Review.jsx'
import Inventory from './Components/Inventory/Inventory.jsx'
import Login from './Components/Login/Login.jsx'
import getLocalCart from './Components/LoadData/LoadData'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Shop/>,
      },
      {
        path:"order",
        element:<Order/>,
      },
      {
        path:"review",
        element:<Review/>,
        loader:getLocalCart,
      },
      {
        path:"inventory",
        element:<Inventory/>,
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
