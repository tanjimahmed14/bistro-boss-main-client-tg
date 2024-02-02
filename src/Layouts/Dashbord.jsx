import {
  FaCalendarAlt,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

import { VscPreview } from "react-icons/vsc";
import { FaBook, FaBookMedical } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {
  const [isAdmit] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu uppercase p-4 space-y-2">
          {isAdmit ? (
            <>
              <li>
                <NavLink to="/dashbord/home">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/reservation">
                  <FaUtensils />
                  add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/paymentHistory">
                  <FaList></FaList>
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/cart">
                  <FaBook></FaBook>
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/users">
                  <FaUsers />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashbord/home">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/reservation">
                  <FaCalendarAlt></FaCalendarAlt>
                  reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/paymentHistory">
                  <FaCalendarAlt></FaCalendarAlt>
                  payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ( {cart.length} )
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/review">
                  <VscPreview></VscPreview>
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/booking">
                  <FaBookMedical></FaBookMedical>
                  my booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
