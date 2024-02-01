import useMenu from "../../Hooks/useMenu";
import ShopbannerImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Ourcart from "./Ourcart";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
    const categoryes = ['salad','pizza', 'soup', 'dessert', 'drinks' ]
    const {category} = useParams()
    const intialIndex = categoryes.indexOf(category)
  const [tabIndex, setTebIndex] = useState(intialIndex)
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <section>
        <Cover
          img={ShopbannerImg}
          title={"OUR SHOP"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
        <div className="max-w-6xl mx-auto">
          <Tabs defaultIndex={tabIndex} onSelect={(index) => setTebIndex(index)}>
            <div className="text-center">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>
            </div>
            <div className="mt-10">
            <TabPanel>
                <Ourcart item={salad}></Ourcart>
            </TabPanel>
            <TabPanel>
            <Ourcart item={pizza}></Ourcart>
            </TabPanel>
            <TabPanel>
            <Ourcart item={soup}></Ourcart>
            </TabPanel>
            <TabPanel>
            <Ourcart item={dessert}></Ourcart>
            </TabPanel>
            <TabPanel>
              <Ourcart item={drinks}></Ourcart>
            </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default OurShop;
