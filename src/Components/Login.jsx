import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/Authprovider';
import useTitle from '../MyHooks/DynamicTitle';
const Login = () => {
  const { loginUser,handleGoogle,handleGithub} = useContext(AuthContext)
  const [passwordShow, setpasswordShow] = useState(false)
  useTitle('Login Page')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  // console.log(from);
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    loginUser(email, password)
      .then(result => {
        toast('Log In Account Successfully !', { autoClose: 2000,type:"default"})
        setTimeout(() => {
          navigate(from,{replace:true})
        },3000);
      }).catch(error => {
        console.log(`Error:`, error.message);
        toast.error('Email Or Password Has Been Invalid !', { autoClose: 3000 })
      })
    e.target.reset()
  }

  const googleLogin = () => {
    handleGoogle().then(result => {
      navigate(from,{replace:true})
          }).catch(error => {
            console.log(`Error:`,error.message);
          })
  }
  const gitHubLogin = () => {
    handleGithub().then(result => {
      navigate(from,{replace:true})
          }).catch(error => {
            console.log(`Error:`,error.message);
          })
  }

  const handleTogglePassword = () => {
    setpasswordShow(!passwordShow)
  }
  return (
    <>
      <div className='relative top-[7rem] flex flex-col items-center p-2'>
        <div className="w-full mx-auto max-w-md p-4 rounded-md shadow-md sm:p-8 bg-neutral my-10 text-white">
          <h2 className="mb-3 text-3xl font-semibold text-center text-base-100">Log In to your account</h2>
          <p className="text-md text-center text-white">Dont have account?
            <span className="focus:underline hover:underline cursor-pointer text-blue-300 ml-2 font-semibold"><Link to="/register" state={location.state}>Register here</Link></span>
          </p>
          <div className="my-6 space-y-4 ">
            <button onClick={googleLogin} aria-label="Log In with Google" type="button" className=" active:bg-red-600 hover:bg-error duration-300 font-semibold focus:none outline-none hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-white ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Log In with Google</p>
            </button>
            <button onClick={gitHubLogin} aria-label="Log In with GitHub" role="button" className="active:bg-blue-700 hover:bg-accent duration-300 font-semibold focus:none outline-none hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-white ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>Log In with GitHub</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-white" />
            <p className="px-3 text-white">OR</p>
            <hr className="w-full text-white" />
          </div>
          <form className="space-y-8 ng-untouched ng-pristine ng-valid" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-md font-semibold text-base-100 tracking-wider">Email address</label>
                <input type="email" name="email" id="email" required placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
              </div>
              <div className="space-y-2 relative">
                <div className="flex justify-between">
                  <label className="text-md font-semibold text-base-100 tracking-wider">Password</label>
                  <span className=" focus:underline hover:underline text-blue-300 ml-2 text-sm font-semibold cursor-pointer">Forgot password?</span>
                </div>
                <input type={passwordShow ? 'text' : 'password'} required name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                <button
                  type="button"
                  className="text-slate-600 absolute right-4 transform translate-y-3 text-xl active:text-blue-500"
                  onClick={handleTogglePassword}
                >
                  {passwordShow ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md hover:bg-neutral hover:border-2 duration-300 transition bg-blue-400 text-gray-50">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;