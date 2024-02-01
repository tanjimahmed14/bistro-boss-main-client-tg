const MenuItem = ({ items }) => {
  console.log(items);
  const { image, name, price, recipe } = items;
  return (
    <div className="flex items-center space-x-4 w-11/12 mb-10">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-20 h-16 object-cover"
        src={image}
        alt=""
      />
      <div>
        <h1 className="font-cinizel sm:text-base text-[#151515] md:text-2xl font-extralight">
          {name} ----------
        </h1>
        <p className="text-[#737373] sm:text-xs font-inter text-xs">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-lg font-inter">${price}</p>
    </div>
  );
};

export default MenuItem;
