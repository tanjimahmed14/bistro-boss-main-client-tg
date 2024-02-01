import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../Hooks/useCart";

const Navber = () => {
  const { logOut, user } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart.length);

  const handelLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navInfo = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/sicrate">Sicrate</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="/dashbord/cart">
          <div className="indicator">
            <TiShoppingCart className="text-3xl"></TiShoppingCart>
            <span className="badge badge-sm indicator-item py-2">
              +{cart.length}
            </span>
          </div>
        </Link>{" "}
      </li>

      {user ? (
        <>
          <li>
            <button onClick={handelLogout}>Log Out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-[#15151580] text-white bg-opacity-30 max-w-screen-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu items-center menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navInfo}
          </ul>
        </div>
        <a className="text-3xl font-cinizel">
          BISTRO BOSS <br />
          <span className="font-cinizel text-xl uppercase">
            R e s t a u r a n t
          </span>{" "}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1">{navInfo}</ul>
      </div>
    </div>
  );
};

export default Navber;
