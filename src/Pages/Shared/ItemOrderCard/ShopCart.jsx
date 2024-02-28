import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const ShopCart = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  //
  const [, refetch] = useCart();

  const handelClickCart = () => {
    // console.log(food, user.email);
    if (user && user.email) {
      // jodi user theke
      console.log(user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been saved to carts`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      // jodi user nah pay
      Swal.fire({
        title: "Are you not logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // sent to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card rounded-none bg-[#F3F3F3] ">
      <figure>
        <img src={image} alt="Cart" />
      </figure>
      <p className="bg-[#111827] text-white absolute right-0 px-4 py-2 m-2">
        $ {price}
      </p>
      <div className="card-body text-center space-y-2">
        <h2 className="text-2xl text-[#151515] font-inter font-bold">{name}</h2>
        <p className="text-[#737373] text-xs font-light">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handelClickCart}
            className="px-4 font-inter py-2 rounded-xl bg-[#E8E8E8] border-b-2 border-[#BB8506] text-[#BB8506] text-base hover:duration-1000 hover:bg-[#111827]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
