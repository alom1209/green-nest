import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';

const Login = () => {
    const{logIn,setUser,user,googleSignIn}=useContext(AuthContext)
    const[error,setError]=useState('')
    const location=useLocation()
    const navigate=useNavigate()
    const handleLogIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        logIn(email,password).then((result=>{
            const user=result.user;
            setUser(user);
            navigate(`${location.state? location.state:'/'}`)
            toast.success("Successfully logged in")
        })).catch((err)=>{
            setError(err.message)
            toast.error(err.message)
        })
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
    console.log(user)
    return (
         <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Login to Your Account</h2>
      <form onSubmit={handleLogIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" required/>
          {
            error && <p className='font-semibold text-md text-red-500'>{error}</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Log in</button>
          <div className='divider'>
            or continue with
          </div>
          <button onClick={handleGoogleSignIn} className="btn bg-black text-white border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
          <p className='font-semibold text-center py-4 text-[#706F6F]'>Dont’t Have An Account ?<Link className='text-secondary' to='/auth/register'>Sign up</Link></p>
        </fieldset>
      </form>
    </div>
         </div>
    );
};

export default Login;