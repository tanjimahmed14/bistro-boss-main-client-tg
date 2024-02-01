import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  //   delete section
  const hendelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Cart</title>
      </Helmet>
      <SectionTitle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>

      <div className="flex justify-around mb-8">
        <h1 className="text-2xl">
          Total orders: <span className="font-bold">{cart.length}</span>
        </h1>
        <h1 className="text-2xl">
          Total price: $<span className="font-bold">{totalPrice}</span>
        </h1>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table lg:max-w-5xl  mx-auto bg-[#F6F6F6]">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="text-base">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <th>
                    <button
                      onClick={() => hendelDelete(item._id)}
                      className="btn btn-ghost btn-lg text-red-700"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
