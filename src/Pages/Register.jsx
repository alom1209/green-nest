
import React, {  useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';

const Register = () => {
    const {createUser,setUser,user,updateUser}=useContext(AuthContext)
    const[error,setError]=useState("")
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
    console.log(user)
    return (
         <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
             <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Enter Your Name" required/>
           <label className="label">Email</label>
          <input type="email" className="input"name='email' placeholder="Enter Your Email Address" required/>
          <label className="label">Photo URL</label>
          <input type="text" className="input" name='photo' placeholder="Enter your Photo URL" required/>
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Enter Your Password" required/>
          {error && (
              <p className="text-red-600 font-semibold text-sm mt-2">{error}</p>
            )}
          <button type='submit' className="btn btn-neutral mt-4">Sign up</button>
          <p className='font-semibold text-center py-4 text-[#706F6F]'>Already Have An Account ?<Link className='text-secondary' to='/auth/login'> Log in</Link></p>
        </fieldset>
      </form>
    </div>
         </div>
    );
};

export default Register;