import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'

import Home from './pages/Home.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './redux/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
