import React, { useState, useEffect } from 'react'
import MyAddedVisaItem from '../components/MyAddedVisaItem'

export default function AddedVisa() {
  const [visas, setVisas] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      fetch('https://jnoyon-ph-a10-server.vercel.app/visa')
        .then((res) => res.json())
        .then((data) => {
          setVisas(data);  
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); 
        });
    }, []);


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
