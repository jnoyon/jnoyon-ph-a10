import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MyAddedVisaItem from '../components/MyAddedVisaItem'

export default function AddedVisa() {
  const visas = useLoaderData()
  return (
    <div className='container mx-auto w-11/12 mb-5'>
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> My Added Visas </h2>
      <div className="grid md:grid-cols-4 gap-5">
        {
          visas.map((visa, index)=> <MyAddedVisaItem key={index} visa={visa}></MyAddedVisaItem>)
        }
      </div>
    </div>
  )
}


