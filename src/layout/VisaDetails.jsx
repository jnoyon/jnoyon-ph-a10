import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function VisaDetails() {
    const {_id} = useParams();
    const id = parseInt(_id);
    const data = useLoaderData();
    const visa = data.find(visa => visa._id === id)
    console.log(visa)
  return (
    <div className='mx-auto container w-11/12 py-5'>
        <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Visa Information </h2>
        VisaDetails {visa} 
    </div>
  )
}
