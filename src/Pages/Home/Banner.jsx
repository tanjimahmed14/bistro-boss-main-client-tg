import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/home/01.jpg";
import bannerImg2 from "../../assets/home/02.jpg";
import bannerImg3 from "../../assets/home/03.png";
import bannerImg4 from "../../assets/home/04.jpg";
import bannerImg5 from "../../assets/home/05.png";
const Banner = () => {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
        <div>
          <img src={bannerImg4} />
        </div>
        <div>
          <img src={bannerImg5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
