import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaApplicationItem from "../components/VisaApplicationItem";

export default function VisaApplication() {
  const LoadApplications = useLoaderData();
  const [loading, setLoading] = useState(true)
  const [applications, setApplications] = useState(LoadApplications);

  useEffect(()=> {
    if(LoadApplications){
      setApplications(LoadApplications)
      setLoading(false)
    }
  }, [LoadApplications])

  return (
    <div className="container mx-auto w-11/12 mb-5">
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Applications </h2>
      <div className="mb-5">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" />
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
      ): applications && applications.length > 0 ?  (
        <div className="grid md:grid-cols-4 gap-5">
        {applications.map((application, index) => (
          <VisaApplicationItem
            key={index}
            application={application}
            setApplications={setApplications}
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
