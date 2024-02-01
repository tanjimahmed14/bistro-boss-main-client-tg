import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

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
    </section>
  );
};

export default PopularMenu;
