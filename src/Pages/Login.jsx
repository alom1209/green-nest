import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const{logIn,setUser,user,googleSignIn,handleForget}=useContext(AuthContext)
    const[error,setError]=useState('')
    const[editing,setEditing]=useState(false)
    const[loading,setLoading]=useState(false)
    const[showPassword,setShowPassword]=useState(false)
    const emailRef=useRef()
    const location=useLocation()
    const navigate=useNavigate()
    const handleLogIn=(e)=>{
        e.preventDefault();
        setError('')
        setLoading(true)
        const email=e.target.email.value;
        const password=e.target.password.value;
        logIn(email,password).then((result=>{
            const user=result.user;
            setUser(user);
            navigate(`${location.state? location.state:'/'}`)
            toast.success("Successfully logged in")
        })).catch((err)=>{
            setError("Incorrect email or password");
      toast.error("Please enter correct email and password")
        }) .finally(setLoading(false))
       
    }
    const handleGoogleSignIn=()=>{
      setLoading(true)
      googleSignIn()
      .then((result)=>{
        const user=result.user;
        setUser(user);
        navigate(`${location.state? location.state:'/'}`)
        toast.success("successfully logged in via Google")
      }).catch(err=>{
            setError(err.message)
            toast.error(err.message)
        })
    }
    const handleForgotPassword=()=>{
      const email=emailRef.current.value;
      if(!email){
        toast.error("Please enter your email")
        return;
      }
      handleForget(email).then(()=>{
        setEditing(false)
        toast.success("Password recovery email sent")
      }).catch((err)=>{
      toast.error(err.message)
      })
    }
    const handleShowPassword=(event)=>{
      event.preventDefault();
      setShowPassword(!showPassword)
    }
    return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="card w-full max-w-sm shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login to Your Account</h2>
        <form onSubmit={handleLogIn} className="space-y-4">
          {!editing ? (
            <>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 font-medium">Password</label>
                <div className='relative'>
                  <input
                  id="password"
                  type={showPassword?'text':'password'}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <div type='button' onClick={handleShowPassword} className='z-10 absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-800' tabIndex={-1}>{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</div>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className={`btn btn-neutral w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="text-sm link link-hover"
                >
                  Forgot password?
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-center">Reset Your Password</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                ref={emailRef}
                required
              />
              <button
                type="button"
                onClick={handleForgotPassword}
                className="btn btn-primary w-full"
              >
                Send Reset Email
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-outline w-full mt-2"
              >
                Back to Login
              </button>
            </div>
          )}

          <div className="divider">or continue with</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-black w-full flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="font-semibold text-center py-4 text-sm text-[#706F6F]">
            Don’t have an account?{' '}
            <Link to="/auth/register" className="text-secondary font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;