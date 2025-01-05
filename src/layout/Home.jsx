import React, { useEffect, useState } from 'react'
import Features from '../components/Features'
import Slider from '../components/Slider'
import Consult from '../components/Consult'
import { useLoaderData } from 'react-router-dom'
import LatestVisa from '../components/LatestVisa'


export default function Home() {
  const visas = useLoaderData() 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visas) {
      setLoading(false);
    }
  }, [visas]);
  return (
    <div>
      <Slider />
      <Features />

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : visas && visas.length > 0 ? (
        <LatestVisa visas={visas} />
      ) : (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-500 text-lg">No Visas Available</p>
        </div>
      )}
      
      <Consult />
    </div>
  )
}
