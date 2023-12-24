import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import AuthProvider from './component/Providers/AuthProvider';
import SignUp from './component/SignUp/SignUp';
import Dashboard from './component/Layout/Dashboard';
import MyProfile from './component/DashboardPage/MyProfile/MyProfile';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AddTask from './component/DashboardPage/AddTask/AddTask';
import AllTask from './component/DashboardPage/AllTask/AllTask';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Service from './component/Service/Service';
// import { QueryClientProvider } from '@tanstack/react-query';



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
        path: 'about',
        element: <About></About>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'service',
        element: <Service></Service>
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
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'addTask',
        element: <AddTask></AddTask>
      },
      {
        path: 'allTask',
        element: <AllTask></AllTask>
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
  
)

