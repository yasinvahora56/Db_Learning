import './App.css';
import Table from './Components/Table';
import EditUserPage from "./Components/EditUserPage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUserPage from './Components/AddUserPage.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Table /> 
    },
    {
      path: "/edit",
      element: <EditUserPage />
    },
    {
      path: "/add",
      element: <AddUserPage />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;