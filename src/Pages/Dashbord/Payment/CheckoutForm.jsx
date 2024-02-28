import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaStripe } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [ClientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPirice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPirice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPirice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPirice]);

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }
    // conform payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(ClientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("paument intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction Id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPirice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save data", res.data);
        refetch();
        if (res.data.paymentResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashbord/paymentHistory");
        }
      }
    }
  };
  return (
    <form
      className="w-7/12 mx-auto border rounded-lg p-10"
      onSubmit={handelSubmit}
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn w-full md:mt-10  btn-primary px-5 mt-5 "
        type="submit"
        disabled={!stripe || !ClientSecret}
      >
        <FaStripe className="text-4xl"></FaStripe>
      </button>

      <p className="text-red-600 mt-3">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
