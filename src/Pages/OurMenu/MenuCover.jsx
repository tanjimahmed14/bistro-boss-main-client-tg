    
const MenuCover = ({title, img}) => {
  return (
        <div className="hero w-full h-[550px] bg-fixed object-cover" style={{backgroundImage: `url('${img}')`}}>
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-center bg-black bg-opacity-60 w-3/6 h-2/5 text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-3 text-5xl pt-5 font-cinizel uppercase font-light">{title}</h1>
        </div>
      </div>
    </div>    
  );
};

export default MenuCover;
