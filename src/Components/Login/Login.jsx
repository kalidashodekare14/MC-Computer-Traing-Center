import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import loginImage from '../../assets/logins.png'
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signIn(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          title: "User Login successfully",
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
          }
        });

        navigate('/');
      })

  }

  const handleSocialLogin = (e) => {
    e.preventDefault();
    signInWithGoogle()
    navigate('/')

  }
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex w-[80%] m-auto '>
          <div className="w-[50%]">
            <img className="" src={loginImage} alt="" />
          </div>
          <div className='w-[40%] px-6 py-8 md:px-8 lg:w-1/2'>
            <div className='flex justify-center mx-auto'>
            </div>
            <p className='mt-3 text-4xl'>Sign In</p>
            <form onSubmit={handleLogin}>
              <div className='mt-4 border-b-[1.5px] border-[#000]'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='LoggingEmailAddress'
                >

                </label>
                <input
                  className="input w-full "
                  id='LoggingEmailAddress'
                  autoComplete='email'

                  placeholder="Enter Your Email"
                  name='email'

                  type='email'
                />
              </div>
              <div className='my-4 border-b-[1.5px] border-[#000]'>
                <div className='flex justify-between'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-600 '
                    htmlFor='loggingPassword'
                  >
                  </label>
                </div>
                <input
                  className="input w-full "
                  id='loggingPassword'
                  autoComplete='current-password'
                  name='password'
                  placeholder="Enter Your Password"
                  type='password'
                />
              </div>
              <div className="form-control">
                <label className="cursor-pointer flex">
                  <input type="checkbox" required className="checkbox checkbox-accent" />
                  <span className=" mb-[4px] ml-[10px]">Remember me</span>
                </label>
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  className="btn px-[30px] bg-[#20d7ab] text-white font-bold"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center gap-[16px] my-[20px]">
              <h1 className="font-bold">Or Login with</h1>
              <button onClick={handleSocialLogin}>
                <FcGoogle className="text-4xl" />
              </button>
              <FaFacebookSquare className="text-4xl text-[#3b5998]" />
            </div>
            <div>
              <Link to='/register'> <h1 className="underline underline-offset-2">Create Your Account</h1></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;