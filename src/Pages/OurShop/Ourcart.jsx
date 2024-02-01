import ShopCart from "../Shared/ItemOrderCard/ShopCart";

const Ourcart = ({ item }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {item.map((item) => (
          <ShopCart key={item._id} item={item}></ShopCart>
        ))}
      </div>
    </div>
  );
};

export default Ourcart;
