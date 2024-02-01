import { Parallax } from 'react-parallax';



const Cover = ({img, title, subTitle}) => {
  return (



    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the cover"
        strength={-200}
    >
       <div className="hero w-full h-[550px]">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center bg-black bg-opacity-60 w-4/6 h-2/5 text-neutral-content">
        <div className="max-w-md text-white ">
          <h1 className="mb-3 text-7xl font-cinizel font-bold">{title}</h1>
          <p className="text-xl font-cinizel">{subTitle}</p>
        </div>
      </div>
    </div>
    </Parallax>
   
  );
};

export default Cover;
