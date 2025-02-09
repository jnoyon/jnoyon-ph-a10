import React from 'react'
import { Link } from 'react-router-dom';

export default function LatestVisaItem({visa}) {
    const {_id, countryImageUrl, countryName, visaType, processingTime, validPassport, visaApplicationForm, passportPhoto, bio, ageRestriction, fee, validity, applicationMethod } = visa;
    return (
      <div className='bg-base-200 shadow-sm rounded-md p-2 text-center'>
          <img src={countryImageUrl} alt="contry" className='h-20 mx-auto rounded-md mb-1' />
          <h2 className='font-bold mb-2'> {countryName} </h2>
          <ul className='text-left text-sm flex flex-col gap-1 mb-3'>
              <li> <b> Visa Type: </b> {visaType} </li>
              <li> <b> Procession Time: </b> {processingTime} </li>
              <li> <b> Free: </b> {fee} </li>
              <li> <b> Validity: </b> {validity} </li>
              <li> <b> Application Method: </b> {applicationMethod} </li>
          </ul>
          <Link to={`/visa/${_id}`} className='bg-green-500 px-5 rounded-md font-bold py-1 text-white text-sm'> See Details </Link>
      </div>
    )
}
