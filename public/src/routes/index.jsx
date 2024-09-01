import {createBrowserRouter}  from "react-router-dom"
import HomePage from "../view/homePage"
import Detail from "../view/detail"

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"/detail/:id",
    element: <Detail/>
  }
])

export default router