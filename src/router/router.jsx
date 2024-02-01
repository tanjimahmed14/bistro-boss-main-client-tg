import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Sicrate from "../Pages/sicrate";
import Dashbord from "../Layouts/Dashbord";
import MyCart from "../Pages/Dashbord/Cart/MyCart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/sicrate",
        element: (
          <PrivateRoute>
            {" "}
            <Sicrate></Sicrate>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      // admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
