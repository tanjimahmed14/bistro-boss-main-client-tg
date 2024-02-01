import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const SocialLogInGoogle = () => {
  const { singInWithGoogle } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const hendelGoogleSingIn = () => {
    singInWithGoogle()
    .then((result) => {
      console.log(result.user)
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosSecure.post('/users', userInfo)
      .then(res => {
        console.log(res.data)
        navigate('/')
      })
    })
    .catch(error => {
        console.log(error)
    })
  };
  return (
    <div>
      <button
        onClick={hendelGoogleSingIn}
        className="btn btn-circle btn-outline">
        <FcGoogle className="text-3xl"></FcGoogle>
      </button>
    </div>
  );
};

export default SocialLogInGoogle;
