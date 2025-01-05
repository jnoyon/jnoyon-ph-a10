import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import VisaItem from '../components/VisaItem'

export default function AllVisa() {
  const visas = useLoaderData()
  const [loading, setLoading] = useState(true)
  const [allvisas, setAllVisas] = useState(visas)

  useEffect(() => {
    if (visas) {
      setAllVisas(visas)
      setLoading(false)
      
    }
  }, [visas]) 

  return (
    <div className='container mx-auto w-11/12 mb-5'>
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Visas </h2>
      
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
       
       <span className="loading loading-bars loading-lg"></span>
      </div>
      ) : allvisas && allvisas.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-5">
          {visas.map((visa, index) => (
            <VisaItem key={index} visa={visa} />
          ))}
        </div>
      ): (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-3xl"> No Data Found </h1>
       </div>
      )
    }
    </div>
  )
}
