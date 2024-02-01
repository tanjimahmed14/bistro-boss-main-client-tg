import Banner from "./Banner";
import BistroCenter from "./BistroCenter";
import Cetagory from "./Cetagory";
import ConturctUs from "./ConturctUs";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <Cetagory></Cetagory>
        <BistroCenter></BistroCenter>
        <PopularMenu></PopularMenu>
        <ConturctUs></ConturctUs>
      </div>
      <Featured></Featured>
      <div className="max-w-6xl mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
