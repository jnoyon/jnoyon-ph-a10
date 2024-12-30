import React from 'react'
import { Helmet } from 'react-helmet'

export default function AddVisa() {
  return (
    <div className='container mx-auto w-11/12 py-5'>
      <Helmet>
            <title> Add Visa - Visa Navigator </title>
      </Helmet>
        <div className="title">
            <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Add Visa </h2>
            <h3 className='divider font-bold uppercase'> Fill up the form </h3>
        </div>
        <form className='grid grid-cols-3 gap-5 bg-base-300 p-5 rounded-md'>
            <input type="url" className="input input-bordered" placeholder="Country Image" />
            <input type="text" className="input input-bordered" placeholder="Country Name" />
            <select className='select select-bordered w-full'>
                <option> Student Visa </option>
                <option> Tourist Visa </option>
                <option> Official Visa </option>
            </select>

            <input type="submit" value="Add Visa" className="btn col-span-3 btn-secondary" />
        </form>
    </div>
  )
}
