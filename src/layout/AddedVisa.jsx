import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import MyAddedVisaItem from '../components/MyAddedVisaItem'

export default function AddedVisa() {
  const loadedVisas = useLoaderData();  
  const [visas, setVisas] = useState(loadedVisas); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (loadedVisas) {
      setVisas(loadedVisas);
    }
    setLoading(false); // Stop loading when data is loaded
  }, [loadedVisas]);


  return (
    <div className="container mx-auto w-11/12 mb-5">
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5">My Added Visas</h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : visas.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-5">
          {visas.map((visa, index) => (
            <MyAddedVisaItem key={index} visa={visa} setVisas={setVisas} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500 text-lg">No Visas Found</p>
        </div>
      )}
    </div>
  )
}
