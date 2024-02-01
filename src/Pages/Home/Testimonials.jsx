import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section className="mb-10">
        <SectionTitle
          subHeading={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        ></SectionTitle>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <div>
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="flex flex-col items-center px-20  md:px-36 space-y-3 ">
                    <Rating
                      style={{ maxWidth: 110 }}
                      value={review.rating}
                      readOnly
                    />
                    <FaQuoteLeft className="text-6xl"></FaQuoteLeft>
                    <p className="text-[#444] text-sm font-inter font-light">{review.details}</p>
                    <h1 className="text-[#CD9003] text-xl font-inter uppercase font-normal">{review.name}</h1>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
