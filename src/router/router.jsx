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
import AddItems from "../Pages/Dashbord/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import MenageItems from "../Pages/Dashbord/MenageItems/MenageItems";
import UpdateItems from "../Pages/Dashbord/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashbord/Payment/Payment";
import PaymentHistory from "../Pages/Dashbord/Payment/PaymentHistory";
import AdminHome from "../Pages/Dashbord/AdminHome/AdminHome";
import UserHome from "../Pages/Dashbord/UserHome/UserHome";

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
      // normal user routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory>`</PaymentHistory>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-server-liard-six.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <MenageItems></MenageItems>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {},
    ],
  },
]);

export default router;
