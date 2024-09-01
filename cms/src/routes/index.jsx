import {createBrowserRouter}  from "react-router-dom"

import HomePage from "../view/homePage"
import AddProduct from "../view/addProduct"
import Login from "../view/login"
import BaseLayout from "../layouts/baseLayout"
import Category from "../view/Category"
import EditPage from "../view/editPage"
import AddUser from "../view/addUser"
import UploadPage from "../view/uploadImg"

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/add-form",
        element:<AddProduct/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/edit/:id",
        element:<EditPage/>
      },
      {
        path:"/add-user",
        element:<AddUser/>
      },
      {
        path:"/product/:id",
        element:<UploadPage/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
])

export default router