import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

export default function Navbar() {
  const {user, signOutUser} = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
  }

  return (
   
         <div className='flex flex-col md:flex-row gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/all-visa'> All Visas </NavLink>
            <NavLink to='/add-visa'> Add Visa </NavLink>
            <NavLink to='/added-visa'> My added Visa </NavLink>
            <NavLink to='/visa-application'> My visa Application </NavLink>

          <div className='bg-base-100 rounded-md px-2 text-sm'>
          {
            user? <div className="flex gap-2">
                   <div className="tooltip tooltip-secondary tooltip-bottom" data-tip={user.displayName}>
                      <img src={user.photoURL} alt="User" className='rounded-full w-8 h-8' />
                  </div>  <button onClick={handleSignOut}> Logout </button>
                </div>  : <div className='flex gap-5'>
              <NavLink to='/login'> Login </NavLink>
              <NavLink to='/register'> Register </NavLink>
            </div>
          }
          </div>

            
         </div>

  )
}
