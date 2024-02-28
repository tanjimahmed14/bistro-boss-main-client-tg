import { FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MenageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const hendelItemDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="MANAGE ITEMS"
        subHeading="Hurry Up!"
      ></SectionTitle>
      <div>
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl font-cinizel">
            Total users:{" "}
            <span className="font-bold font-inter"> {menu.length}</span>
          </h1>
        </div>
      </div>
      <div className="">
        <div className="overflow-x-auto mb-10">
          <table className="table lg:max-w-5xl  mx-auto bg-[#F6F6F6]">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="text-base">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>UPDATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
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
                    <Link to={`/dashbord/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-[#D1A054] hover:bg-[#eb9b23] text-white">
                        <FaEdit className="text-xl px-0"></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => hendelItemDelete(item)}
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

export default MenageItems;
