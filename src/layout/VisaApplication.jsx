import React, { useEffect, useState } from "react";
import VisaApplicationItem from "../components/VisaApplicationItem";

export default function VisaApplication() {
  const [loading, setLoading] = useState(true);
    const [myData, setMyData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      fetch('https://jnoyon-ph-a10-server.vercel.app/visa-application')
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

    const handleSearch = (event) => {
      setSearchTerm(event.target.value); 
    };


    const filteredData = myData ? myData.filter(application => 
      application.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

  return (
    <div className="container mx-auto w-11/12 mb-5">
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Applications </h2>
      <div className="mb-5">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" value={searchTerm}
            onChange={handleSearch} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </div>
      {loading? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
       </div>
      ): filteredData && filteredData.length > 0 ?  (
        <div className="grid md:grid-cols-4 gap-5">
        {filteredData.map((application, index) => (
          <VisaApplicationItem
            key={index}
            application={application}
            myData={myData}
          ></VisaApplicationItem>
        ))}
      </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-3xl"> No Data Found </h1>
       </div>
      )

      }
    </div>
  );
}
