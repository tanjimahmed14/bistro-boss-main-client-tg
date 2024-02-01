import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="fetured-img  bg-fixed ">
      <div className=" text-white md:py-5 bg-black bg-opacity-60">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex items-center md:px-36 md:mb-20">
          <div>
            <img className="" src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 space-y-2 ">
            <h1 className="text-2xl  font-inter">March 20, 2023</h1>
            <h1 className="text-2xl font-inter">WHERE CAN I GET SOME?</h1>
            <p className="text-base font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="uppercase border-b-2 border-white px-4 py-2   rounded-md  hover:bg-white hover:text-black hover:font-medium">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
