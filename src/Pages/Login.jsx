import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';

const Login = () => {
    const{logIn,setUser,user}=useContext(AuthContext)
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
          <p className='font-semibold text-center py-4 text-[#706F6F]'>Dont’t Have An Account ?<Link className='text-secondary' to='/auth/register'>Sign up</Link></p>
        </fieldset>
      </form>
    </div>
         </div>
    );
};

export default Login;