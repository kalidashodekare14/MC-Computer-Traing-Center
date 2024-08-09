import { Link, useNavigate } from "react-router-dom";
import registerImage from '../../assets/signup.png'
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth/useAuth'
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const Register = () => {


  const { signUpSystem } = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data.email, data.password)
    signUpSystem(data.email, data.password)
      .then(res => {
        console.log(res.user)
        const userInfo = {
          name: data?.name,
          email: data?.email,
          studentId: '-',
          dateOfBirth: '-',
          gender: '-',
          address: '-',
          citizen: '-',
          nationality: '-',
          language: '-',
          status: 'Unenrolled'
        }
        axiosPublic.post('/users-register', userInfo)
          .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Registration Successfuly",
                showConfirmButton: false,
                timer: 1500
              }) .then(() =>{
                navigate('/dashboard/profile')
              })
            }
          })
          .catch(error => {
            console.log(error.message)
          })

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <div>
        <div className="my-[60px]">
          <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl p-5'>
              <div className="w-[50%]">
                <img src={registerImage} alt="" />
              </div>
              <div className='w-full  md:px-8 lg:w-1/2'>
                <p className='mt-3 text-4xl'>Sign Up</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mt-4 border-b-[1.5px] border-[#000]' >
                    <label
                      className='block mb-2 text-sm font-medium text-gray-600 '
                      htmlFor='LoggingName'
                    >
                    </label>
                    <input
                      {...register("name")}
                      className="input w-full "
                      id='LoggingName'
                      autoComplete='Name'
                      placeholder="Enter Your Name"
                      name='name'
                      type='Name'
                    />
                  </div>
                  <div className='mt-4 border-b-[1.5px] border-[#000]'>
                    <label
                      className='block mb-2 text-sm font-medium text-gray-600 '
                      htmlFor='LoggingEmailAddress'
                    >
                    </label>
                    <input
                      {...register("email")}
                      className="input w-full "
                      id='LoggingEmailAddress'
                      autoComplete='email'
                      placeholder="Enter Your Email"
                      name='email'
                      type='email'
                    />
                  </div>
                  <div className='mt-4 border-b-[1.5px] border-[#000]'>
                    <div className='flex justify-between'>
                      <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='loggingPassword'
                      >
                      </label>
                    </div>
                    <input
                      {...register("password")}
                      className="input w-full"
                      id='loggingPassword'
                      autoComplete='current-password'
                      name='password'
                      placeholder="Enter your password"
                      type='password'
                    />
                  </div>
                  <div className='mt-4 border-b-[1.5px] border-[#000]'>
                    <div className='flex justify-between'>
                      <label
                        className='block mb-2 text-sm font-medium text-gray-600 '
                        htmlFor='rePassword'
                      >
                      </label>
                    </div>
                    <input
                      {...register("re_password")}
                      className="input w-full"
                      id='rePassword'
                      autoComplete='current-password'
                      name='repassword'
                      placeholder="Re-Password"
                      type='password'
                    />
                  </div>
                  <div className="mt-5 form-control">
                    <label className="cursor-pointer flex">
                      <input type="checkbox" required className="checkbox checkbox-accent" />
                      <span className=" mb-[4px] ml-[10px]">Remember me</span>
                    </label>
                  </div>
                  <div className='mt-3'>
                    <button
                      type='submit'
                      className="btn px-[30px] bg-[#20d7ab] text-white font-bold"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div>
                  <Link to='/login'> <h1 className="underline underline-offset-2">Create Your Account</h1></Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;