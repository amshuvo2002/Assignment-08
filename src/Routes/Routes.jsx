import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../Component/Header/Navbar';
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Allapps from '../Pages/All-Apps/Allapps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('AppData-8.json')
      },
      {
        path: "/Apps",
        Component: Allapps,
        loader: () => fetch('AllAppsData.json')
      },
      {
        path: "/Installation",
        Component: Installation,
        loader: () => fetch('AllAppsData.json')
      },
      {
        path: "/Apps/:id",
        element: <AppDetails />,
        loader: () => fetch('/AllAppsData.json')
      }

    ]

  },

]);