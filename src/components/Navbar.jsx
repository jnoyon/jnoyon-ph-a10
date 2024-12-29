import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   
         <div className='flex flex-col md:flex-row gap-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/all-visa'> All Visas </NavLink>
            <NavLink to='/all-visa'> Add Visa </NavLink>
            <NavLink to='/all-visa'> My added Visa </NavLink>
            <NavLink to='/all-visa'> My visa Application </NavLink>
            <div className="border border-solid border-secondary px-5 py-1 rounded-md flex gap-5 text-sm">
              <NavLink to='/login'> Login </NavLink>
              <NavLink to='/register'> Register </NavLink>
            </div>
         </div>

  )
}
