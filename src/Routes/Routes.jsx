import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../Component/Header/Navbar';
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
        {
            index:true,
            Component: Home,
            loader:() =>fetch('AppData-8.json')
        }
    ]
   
  },
 
]);