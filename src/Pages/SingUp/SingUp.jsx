import authenticationImg from "../../assets/others/authentication2.png";
import authenticationCover from "../../assets/others/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SingUp = () => {
  const axiosPublic = useAxiosPublic();
  const [Fserror, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { crateuser, userPhotoUrlUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    crateuser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userPhotoUrlUpdate(data.name, data.photoURL)
          .then(() => {
            // create user database
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to database", res.data);
                reset();
                Swal.fire({
                  title: "Logined!",
                  text: "User created successfully",
                  icon: "success",
                });
                navigate("/");
              }
            });
          })
          .catch(() => {
            console.log("not uthorize");
          });
      })
      .catch((error) => {
        setError("Already this email is use, Please provide your valid email");
        console.log(error);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${authenticationCover})` }}
      className="md:py-14"
    >
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${authenticationCover})` }}
        className="md:max-w-5xl  md:shadow-2xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="text-center lg:text-left">
            <img className="" src={authenticationImg} alt="" />
          </div>
          <div className="card shrink-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96">
              <h1 className="text-center text-[#151515] text-3xl font-bold">
                Sing Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] text-base">
                    Name*
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type here your name"
                  className="px-3 py-3 w-12/12 outline-none"
                />
                {errors.name && (
                  <span className="text-red-600 text-xs mt-2">
                    Please provide your name
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] text-base">
                    Photo URL(optional)
                  </span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  {...register("photoURL")}
                  placeholder="Type here your photoURL"
                  className="px-3 py-3 w-12/12 outline-none"
                />
                {errors.photoURL && (
                  <span className="text-red-600 text-xs mt-2">
                    Please provide your photoURL
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] text-base">
                    Email*
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type here  your email"
                  className="px-3 py-3 w-12/12 outline-none"
                />
                {errors.name && (
                  <span className="text-red-600 text-xs mt-2">
                    Please provide your email
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] text-base">
                    Password*
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                  })}
                  placeholder="Enter your password"
                  className="px-3 py-3 w-12/12 outline-none"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-600 text-xs mt-2">
                    Please provide your password
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 text-xs mt-2">
                    Minimum 6 characters password
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 text-xs mt-2">
                    Password must be lessthen 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 text-xs mt-2">
                    Please provide valid password one number, One uppercase and
                    lowarcase
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] text-lg text-white"
                  type="submit"
                  value="Sing Up"
                />
              </div>
              <p className="text-red-600 text-sm">{Fserror}</p>
              <p className="text-[#D1A054] font-bold text-center">
                <small>
                  Already registered?
                  <Link to="/login" className="hover:underline font-extrabold">
                    {" "}
                    Go to log in
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
