import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 px-2 md:grid-cols-2">
        {popular.map((items) => (
          <MenuItem key={items._id} items={items}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to="/shop/salad">
          <button className="px-8 font-inter py-2 rounded-xl bg-[#E8E8E8] border-b-2 border-[#BB8506] text-[#BB8506] text-base hover:duration-1000 hover:bg-[#111827] hover:text-white">
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
