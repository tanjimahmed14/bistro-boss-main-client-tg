import authenticationImg from "../../assets/others/authentication2.png";
import authenticationCover from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogInGoogle from "./SocialLogInGoogle";

const Login = () => {
  const [disabled, setDisable] = useState(true);
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(from)

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // login
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "LogIn Success!",
          text: "You are succesfuly login",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(0);
  }, []);

  const handelvalidatecaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${authenticationCover})` }}
      className="md:py-14"
    >
      <Helmet>
        <title>Bistro Boss | Log in</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${authenticationCover})` }}
        className="md:max-w-5xl  md:shadow-2xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left">
            <img className="" src={authenticationImg} alt="" />
          </div>
          <div className="card shrink-0">
            <form onSubmit={handelLogin} className="card-body w-96">
              <h1 className="text-center text-[#151515] text-4xl font-bold">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] text-base">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="px-3 py-3 w-12/12 outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#444] text-base">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="Enter your password"
                  className="px-3 py-3 w-12/12 outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handelvalidatecaptcha}
                  name="captcha"
                  type="text"
                  placeholder="Type your captcha"
                  className="px-3 py-3 w-12/12 outline-none"
                />
              </div>
              <div className="form-control mt-4">
                <input
                  disabled={disabled}
                  className="btn bg-[#D1A054] text-lg text-white hover:bg-[#e4a74d]"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-[#D1A054] font-bold text-center">
                <small>
                  New here?{" "}
                  <Link to="/singup" className="hover:underline font-extrabold">
                    Create a New Account
                  </Link>
                </small>
              </p>
            </form>
            <div className="text-center mb-7">
              <hr />
              <SocialLogInGoogle></SocialLogInGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
