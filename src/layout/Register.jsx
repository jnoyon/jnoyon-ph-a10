import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-lvh">
      <div className="bg-base-300 p-5 flex flex-col gap-2 rounded-md shadow-md">
        <form className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
            Name <input type="text" className="grow" placeholder="Enter Your Name" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Email <input type="text" className="grow" placeholder="Enter Email" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Photo URL <input type="url" className="grow" placeholder="Enter Photo URL" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Password <input
                type="password"
                className="grow"
                placeholder="Enter Password"
            />
            </label>
            <input type="submit" value="Register" className="btn btn-secondary" />
        </form>
        <p className="text-sm"> Already have Account? <Link to='/login' className="text-secondary"> Login </Link> </p>
      </div>
    </div>
  )
}
