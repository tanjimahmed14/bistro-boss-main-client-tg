import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("singup");
  return (
    <div className="max-w-screen-2xl mx-auto">
      {noHeaderFooter || <Navber></Navber>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
