import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Company from "../pages/Home/Company/Company";
import Offer from "../pages/Home/Offer/Offer";
import Meet from "../pages/Home/Meet/Meet";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import PrivateRout from "./PrivateRout";


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
          element:<PrivateRout><Company></Company></PrivateRout>
        },
        {
          path:"/pages",
          element:<Offer></Offer>
        },
        {
          path:"/service",
          element: <PrivateRout><Meet></Meet></PrivateRout>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);