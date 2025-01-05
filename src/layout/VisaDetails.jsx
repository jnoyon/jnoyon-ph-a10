import React, { useContext } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import { AuthContext } from '../providers/AuthProvider';

export default function VisaDetails() {
    const {_id} = useParams();
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    
    const visa = data.find(visa => visa._id == _id)
    const { countryImageUrl, countryName, visaType, processingTime, validPassport, visaApplicationForm, passportPhoto, bio, ageRestriction, fee, validity, applicationMethod } = visa;
    const handleApply = (id) => {
      console.log(id)
      document.getElementById('apply').showModal()
    }


    // Handle Submit
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const firstName = e.target.fname.value;
      const lastName = e.target.lname.value;
      const appliedDate = e.target.date.value;
      const fee = e.target.fee.value;
      
      const visaApplication = { countryName, countryImageUrl, processingTime, visaType, email, firstName, lastName, appliedDate, fee, validity, applicationMethod };

      fetch('http://localhost:5000/visa-application', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(visaApplication)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          swal({
            title: 'Success',
            text: 'Visa Application Successful',
            icon: 'success',
          });
          document.getElementById("apply").close()
        }
      })
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
              <li> <b> Documents: </b> {validPassport&& 'Valid Passport,'} {visaApplicationForm&& 'Visa Application Form,'} {passportPhoto&& 'Recent Passport Sized Photograph'} </li>
              <li> <b> Age Restriction: </b> {ageRestriction} </li>
              <li> <b> Bio: </b> {bio} </li>
              <li> <b> Applicatino Method: </b> {applicationMethod} </li>
          </ul>
          <button className='btn btn-wide btn-warning' onClick={()=>handleApply(_id)}> Apply Now </button>
      </div>
     
    
    <dialog id="apply" className="modal">
      <div className="modal-box">
      
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
                <label className="font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                  defaultValue={user.email}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-bold">First Name</label>
                <input
                  type="text"
                  name="fname"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Applied Date</label>
                <input
                  type="text"
                  name="date"
                  className="input input-bordered"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Fee </label>
                <input
                  type="text"
                  name="fee"
                  className="input input-bordered"
                  defaultValue={fee}
                />
              </div>
              <input type="submit" className='btn btn-warning mt-2  w-full' value="Submit Now" />
          </form>
              
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    </div>
  )
}
