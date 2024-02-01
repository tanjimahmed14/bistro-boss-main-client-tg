import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImgMenu from "../../assets/menu/banner3.jpg";
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCetagory from "./MenuCetagory";
import useMenu from "../../Hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu()
    
    const offered = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");


  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImgMenu}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      {/* section title  */}
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
      <MenuCetagory item={offered}></MenuCetagory>
      {/* dessert menu */}
      <MenuCetagory item={dessert} img={dessertImg} title={'dessert'} subTitle={'Lorem Ipsum has been the industry’s '} ></MenuCetagory>
      {/* pizza */}
      <MenuCetagory item={pizza} img={pizzaImg} title={'pizza'} subTitle={'Lorem Ipsum has been the industry’s '}></MenuCetagory>
      {/* salad */}
      <MenuCetagory item={salad} img={saladImg} title={'salad'} subTitle={'Lorem Ipsum has been the industry’s '}></MenuCetagory>
      {/* soup */}
      <MenuCetagory item={soup} img={soupImg} title={'soup'} subTitle={'Lorem Ipsum has been the industry’s '}></MenuCetagory>
    </div>
  );
};

export default Menu;
