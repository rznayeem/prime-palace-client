import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import vector from '../../assets/signup-vector.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    console.log(data);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          toast.success('You have successfully logged in');
        }
        console.log(user);
      })
      .catch(error => {
        if (error) {
          toast.error('Your email or password does not match');
        }
      });
  };

  // const handleLogin = e => {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const name = form.get('name');
  //   const email = form.get('email');
  //   const photo = form.get('photo');
  //   const password = form.get('password');

  //   signIn(email, password)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="container h-[90vh] my-20 mx-auto flex flex-col lg:flex-row-reverse">
          <div
            data-aos="fade-right"
            className="text-center rounded-r-xl lg:w-[60%] lg:text-left bg-white"
          >
            <div className="text-center pt-12">
              <h1 className="text-3xl font-bold pb-4">Welcome Back !</h1>
              <p>Thank you for being with us. Please log in!</p>
            </div>
            <img className="" src={vector} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="lg:w-[40%] content-center p-8 rounded-l-xl space-y-3 border bg-[#EE465E] font-sans mx-auto"
          >
            <h1 className="text-3xl font-bold text-center text-white">Login</h1>

            {/* Input fields and the form started */}

            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register('email', { required: true })}
                    className="input input-bordered"
                    required
                  />
                  <p>
                    {errors.email && (
                      <span className="">This field is required</span>
                    )}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register('password', { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#8DA6E8] text-white text-xl">
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center pt-4 space-x-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-sm text-white">Login with social accounts</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social icons */}

            <div className="flex justify-center space-x-4">
              <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">
                  Sign With
                </div>
                <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">
                  G+
                </span>
              </div>
              <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">
                  Sign With
                </div>
                <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">
                  G+
                </span>
              </div>
            </div>
            <p className="text-sm text-white text-center gap-2 flex justify-center sm:px-6 ">
              Don&apos;t have an account?
              <Link
                to={'/register'}
                className="underline text-[#8EA7E9]  hover:text-indigo-600"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
