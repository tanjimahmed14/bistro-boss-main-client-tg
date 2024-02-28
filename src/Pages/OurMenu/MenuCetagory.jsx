import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem/MenuItem";
import MenuCover from "./MenuCover";

const MenuCetagory = ({ item, img, title, subTitle }) => {
  return (
    <div>
      {title && (
        <MenuCover img={img} title={title} subTitle={subTitle}></MenuCover>
      )}
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 px-2 md:grid-cols-2">
          {item.map((items) => (
            <MenuItem key={items._id} items={items}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          {title && (
            <Link to={`/shop/${title}`}>
              <button className="border-b-4 border-black text-black rounded-lg px-4 py-2 font-inter text-base hover:duration-1000 hover:bg-[#111827] hover:text-[#BB8506] hover:border-b-[#BB8506]">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCetagory;
