import React from 'react'
import { useLoaderData } from 'react-router-dom'
import VisaItem from '../components/VisaItem'

export default function AllVisa() {
  const visas = useLoaderData()
  return (
    <div className='container mx-auto w-11/12'>
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Visas </h2>
      <div className="grid grid-cols-4 gap-5">
        {
          visas.map((visa, index)=> <VisaItem key={index} visa={visa}></VisaItem>)
        }
      </div>
    </div>
  )
}
