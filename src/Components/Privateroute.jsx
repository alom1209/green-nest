import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const Privateroute = ({children}) => {
    const{user,loading,setLoading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default Privateroute;