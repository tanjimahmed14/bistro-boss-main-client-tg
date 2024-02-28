import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment History</title>
      </Helmet>
      <SectionTitle
        heading={"Payment history"}
        subHeading={"At a Glance!"}
      ></SectionTitle>
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl font-cinizel">
          Total payment:{" "}
          <span className="font-bold font-inter"> {payments.length}</span>
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto mb-10">
          <table className="table lg:max-w-5xl  mx-auto bg-[#F6F6F6]">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr className="text-base">
                <th>#</th>
                <th>EMAIL</th>
                <th>TRANSACTION ID</th>
                <th>PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.transactionId}</td>
                  <td>$ {payment.price}</td>
                  <th>{payment.status}</th>
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

export default PaymentHistory;
