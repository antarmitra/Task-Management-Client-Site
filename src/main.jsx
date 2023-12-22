import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import AuthProvider from './component/Providers/AuthProvider';
import SignUp from './component/SignUp/SignUp';
import Dashboard from './component/Layout/Dashboard';
import PreviousTasks from './component/DashboardPage/PreviousTasks/PreviousTasks';
import MyProfile from './component/DashboardPage/MyProfile/MyProfile';
import NewTasks from './component/DashboardPage/NewTasks/NewTasks';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      }, {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },

  // Dashboard route
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myprofile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'previousTasks',
        element: <PreviousTasks></PreviousTasks>
      },
      {
        path: 'newTasks',
        element: <NewTasks></NewTasks>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
