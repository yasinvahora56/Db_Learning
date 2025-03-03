import './App.css'
import Table from './Components/Table'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const route = createBrowserRouter([

    {
      path:"/",
      element:"Home Page"
    },
    {
      path:"/add",
      element:"add New User Page"
    },
    {
      path:"/update",
      element:"Update edit User page"
    },

  ])

  return (
    <>
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
    <Table/>
    </>
  )
}

export default App
