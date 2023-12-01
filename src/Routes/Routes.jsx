import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Company from "../pages/Home/Company/Company";
import Offer from "../pages/Home/Offer/Offer";
import Meet from "../pages/Home/Meet/Meet";
import Login from "../components/Login/Login";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/about",
          element:<Company></Company>
        },
        {
          path:"/pages",
          element:<Offer></Offer>
        },
        {
          path:"/service",
          element: <Meet></Meet>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);