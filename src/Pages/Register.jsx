
import React, {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const {createUser,setUser,user,updateUser,googleSignIn}=useContext(AuthContext)
    const[error,setError]=useState("")
    const[showPassword,setShowPassword]=useState(false)
    const location=useLocation()
    const navigate=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        setError("")
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error(`${error}`)
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error(error)
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error(error)
      return;
    }
       createUser(email,password)
       .then((result)=>{
        const user=result.user
        updateUser({displayName:name,photoURL:photo}).then(()=>{
            setUser({...user,displayName:name,photoURL:photo});
        }).catch(err=> toast.error(err.message))
        navigate('/')
         toast.success('Account created successfully!');
       })
       .catch(err=>toast.error(err.message))
    }
    const handleGoogleSignIn=()=>{
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
        const handleShowPassword=(event)=>{
      event.preventDefault();
      setShowPassword(!showPassword)
    }
    return (
         <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
             <label className="mb-1 font-medium">Name</label>
          <input type="text" className="input" name='name' placeholder="Enter Your Name" required/>
           <label className="mb-1 font-medium">Email</label>
          <input type="email" className="input"name='email' placeholder="Enter Your Email Address" required/>
          <label className="mb-1 font-medium">Photo URL</label>
          <input type="text" className="input" name='photo' placeholder="Enter your Photo URL" required/>
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
         
          {error && (
              <p className="text-red-600 font-semibold text-sm mt-2">{error}</p>
            )}
          <button type='submit' className="btn btn-neutral mt-4">Sign up</button>
          <div className='divider'>
            or continue with
          </div>
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
          <p className='font-semibold text-center py-4 text-[#706F6F]'>Already Have An Account ?<Link className='text-secondary' to='/auth/login'> Log in</Link></p>
        </fieldset>
      </form>
    </div>
         </div>
    );
};

export default Register;