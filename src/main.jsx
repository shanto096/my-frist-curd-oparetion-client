import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './component/User.jsx';
import UpdateUser from './component/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/user",
    element: <User></User>,
    loader:()=> fetch('http://localhost:5000/user')
  },
  {
    path: "/update/:id",
    element: <UpdateUser></UpdateUser>,
    loader:({params})=> fetch(`http://localhost:5000/user/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
