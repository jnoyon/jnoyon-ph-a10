import React, { useState, useEffect } from 'react'
import VisaItem from '../components/VisaItem'
import { FaFilter } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
export default function AllVisa() {
  const [loading, setLoading] = useState(true);
    const [myData, setMyData] = useState([]);
    const [filteredVisas, setFilteredVisas] = useState([]); 
    const [selectedVisaType, setSelectedVisaType] = useState('All Visas');

  useEffect(() => {
      fetch('https://jnoyon-ph-a10-server.vercel.app/visa')
        .then((res) => res.json())
        .then((data) => {
          setMyData(data);
          setFilteredVisas(data);  
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false); 
        });
    }, []);

    const uniqueVisaTypes = [
      ...new Set(myData.map((singleVisa) => singleVisa.visaType))
    ]
    
    const handleFilterChange = (event) => {
      const selectedType = event.target.value;
      setSelectedVisaType(selectedType);
  
      if (selectedType === 'All Visas') {
        setFilteredVisas(myData);
      } else {
        const filtered = myData.filter((visa) => visa.visaType === selectedType);
        setFilteredVisas(filtered);
      }
    };

  return (
    <div className='container mx-auto w-11/12 mb-5'>
      <Helmet>
            <title> All Visas - Visa Navigator </title>
      </Helmet>
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Visas </h2>
      <div className="flex justify-between bg-base-300 mb-5 rounded-md p-2 items-center">
        <h2 className='font-bold md:text-2xl flex items-center gap-2'> <FaFilter />  <span> Filter Visa </span> </h2>
        <select value={selectedVisaType}
          onChange={handleFilterChange} className="select select-bordered">
            <option value="All Visas">All Visas</option>
          {
            uniqueVisaTypes.map((visaType, index) => <option key={index}> {visaType}  </option>)
          }    
        </select>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
       
       <span className="loading loading-bars loading-lg"></span>
      </div>
      ) : filteredVisas && filteredVisas.length > 0 ? (
        <div className="grid md:grid-cols-4 gap-5">
          {filteredVisas.map((visa, index) => (
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
