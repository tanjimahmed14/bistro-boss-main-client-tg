import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-liard-six.vercel.app",
});
const useAxiosSecure = () => {
  // const navigate = useNavigate();
  // const { logOut } = useAuth();

  //
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    // console.log("request stoped by interceptors", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    function (error) {
      return Promise.reject(error);
    };

  // intercept 401 and 403
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.request.status;
      // console.log("intercept error code:", status);
      if (status === 401 || status === 403) {
        // await logOut();
        // navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
