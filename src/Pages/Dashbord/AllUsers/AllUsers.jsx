import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const hendelMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    const hendelDelete = user => {
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
              axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
    }
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | User</title>
          </Helmet>
          <SectionTitle
            subHeading={"How many??"}
            heading={"MANAGE ALL USERS"}
          ></SectionTitle>
          <div className="flex justify-center mb-8">
            <h1 className="text-2xl font-cinizel">Total users: <span className="font-bold font-inter"> {users.length}</span></h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table lg:max-w-5xl  mx-auto bg-[#F6F6F6]">
                {/* head */}
                <thead className="bg-[#D1A054] text-white">
                  <tr className="text-base">
                    <th>#</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                      {user.role === 'admin' ? 'Admin' : <button
                      onClick={() => hendelMakeAdmin(user)}
                          className="btn btn-ghost btn-lg bg-[#D1A054] text-white text-xl hover:bg-[#dba655]" >
                          <FaUsers></FaUsers>
                        </button>}
                      </td>
                      <th>
                        <button
                        onClick={() => hendelDelete(user._id)}
                          className="btn btn-ghost btn-lg text-red-700" >
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

export default AllUsers;