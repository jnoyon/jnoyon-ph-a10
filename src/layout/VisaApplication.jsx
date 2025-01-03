import React from 'react'
import { useLoaderData } from 'react-router-dom'
import VisaApplicationItem from '../components/VisaApplicationItem';

export default function VisaApplication() {
  const applications = useLoaderData();
  return (
    <div className='container mx-auto w-11/12'>
          <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Applications </h2>
          <div className="grid grid-cols-4 gap-5">
            {
              applications.map((application, index)=> <VisaApplicationItem key={index} application={application}></VisaApplicationItem>)
            }
          </div>
        </div>
  )
}
