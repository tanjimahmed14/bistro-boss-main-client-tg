import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import iteamImg1 from "../../assets/home/slide1.jpg";
import iteamImg2 from "../../assets/home/slide2.jpg";
import iteamImg3 from "../../assets/home/slide3.jpg";
import iteamImg4 from "../../assets/home/slide4.jpg";
import iteamImg5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Cetagory = () => {
  return (
    <section>
        <SectionTitle
            subHeading={'From 11:00am to 10:00pm'}
            heading={'ORDER ONLINE'}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide aut>
          <img src={iteamImg1} alt="" />
          <h1 className=" uppercase font-light text-2xl text-center relative -top-16  font-cinizel text-white">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iteamImg2} alt="" />
          <h1 className=" uppercase font-light text-2xl text-center relative -top-16  font-cinizel text-white">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iteamImg3} alt="" />
          <h1 className=" uppercase font-light text-2xl text-center relative -top-16  font-cinizel text-white">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iteamImg4} alt="" />
          <h1 className=" uppercase font-light text-2xl text-center relative -top-16  font-cinizel text-white">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iteamImg5} alt="" />
          <h1 className=" uppercase font-light text-2xl text-center relative -top-16  font-cinizel text-white">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Cetagory;
