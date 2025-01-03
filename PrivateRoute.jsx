import React, { useContext } from 'react'
import { AuthContext } from './src/providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)
    if(loading){

       return (<div className='container mx-auto w-11/12 flex items-center justify-center min-h-lvh'>
        <span className="loading loading-ring loading-lg"></span>
    </div>)
    }
    if(user){
        return children;
    }

  return (
    
    
    <Navigate state={location.pathname} to='/login'></Navigate>
  )
}
