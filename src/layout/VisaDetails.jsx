import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

export default function VisaDetails() {
    const {_id} = useParams();
    
    const data = useLoaderData();
    
    const visa = data.find(visa => visa._id == _id)
    const { countryImageUrl, countryName, visaType, processingTime, validPassport, visaApplicationForm, passportPhoto, bio, ageRestriction, fee, validity, applicationMethod } = visa;
    const handleApply = (id) => {
      console.log(id)
      document.getElementById('apply').showModal()
    }
    return (
    <div className='mx-auto container w-11/12 py-5'>
        <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Visa Information {countryName} </h2>
        <div className='bg-base-200 shadow-sm rounded-md p-2 text-center'>
          <img src={countryImageUrl} alt="contry" className='h-20 mx-auto rounded-md mb-1' />
          <h2 className='font-bold mb-2'> {countryName} </h2>
          <ul className='text-left text-sm flex flex-col gap-1 mb-3'>
              <li> <b> Visa Type: </b> {visaType} </li>
              <li> <b> Procession Time: </b> {processingTime} </li>
              <li> <b> Fee: </b> {fee} </li>
              <li> <b> Validity: </b> {validity} </li>
              <li> <b> Validity: </b> {validPassport} </li>
              <li> <b> Validity: </b> {passportPhoto} </li>
              <li> <b> Age Restriction: </b> {ageRestriction} </li>
              <li> <b> Validity: </b> {visaApplicationForm} </li>
              <li> <b> Validity: </b> {visaApplicationForm} </li>
              <li> <b> Bio: </b> {bio} </li>
              <li> <b> Applicatino Method: </b> {applicationMethod} </li>
          </ul>
          <button className='btn btn-wide btn-warning' onClick={()=>handleApply(_id)}> Apply Now </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    
    <dialog id="apply" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    </div>
  )
}
