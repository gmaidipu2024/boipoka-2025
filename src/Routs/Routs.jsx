import React from 'react';

import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../pages/Routs/Root';
import Errorpage from '../pages/Errorpage/Errorpage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/Bookdetails/Bookdetails';



 
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        index:true,
        loader:()=>fetch("./booksData.json"),
        path:"/",
        Component:Home
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"bookDetails/:id",
        loader:()=>fetch("./booksData.json"),
        Component:BookDetails
      }
    ]
  },
]);
