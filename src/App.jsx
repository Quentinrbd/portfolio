import All from "./pages/All"
import Mentions from "./pages/Mentions/Mentions"
import {Route, RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element: <All/>
  },
  {
    path:'/mentions',
    element: <Mentions/>
  }
])
function App() {

  return <RouterProvider router={router}/>
}

export default App
