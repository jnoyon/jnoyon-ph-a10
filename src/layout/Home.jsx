import React, { useEffect, useState } from 'react'
import Features from '../components/Features'
import Slider from '../components/Slider'
import Consult from '../components/Consult'
import LatestVisa from '../components/LatestVisa'
import { Helmet } from 'react-helmet'


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    fetch('https://jnoyon-ph-a10-server.vercel.app/visa')
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);  
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);
  
  return (
    <div>
      <Helmet>
            <title>  Visa Navigator </title>
      </Helmet>
      <Slider />
      <Features />

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : myData && myData.length > 0 ? (
        <LatestVisa visas={myData} />
      ) : (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-500 text-lg">No Visas Available</p>
        </div>
      )}
      
      <Consult />
    </div>
  )
}
