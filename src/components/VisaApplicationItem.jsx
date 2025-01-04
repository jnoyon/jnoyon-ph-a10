import React from 'react'
import { Link } from 'react-router-dom';

export default function VisaApplicationItem({application}) {
    const {_id, appliedDate, firstName, lastName, email, countryImageUrl, countryName, visaType, processingTime, fee, validity, applicationMethod } = application;
    const handleCancel = (_id) => {
        console.log(_id);
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this Visa!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            fetch(`http://localhost:5000/visa-application/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data.deletedCount);
                if (data.deletedCount > 0) {
                  swal("Visa has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Visa can be be deleted!", {
                    icon: "error",
                  });
                }
              })
              .catch((error) => {
                swal("Visa Can not be Deleted!", {
                  icon: "error",
                });
                console.log("ERROR", error);
              });
          } else {
            swal("Your Visa is safe!");
          }
        });
      };
    return (
      <div className='bg-base-200 shadow-sm rounded-md p-2 text-center'>
          <img src={countryImageUrl} alt="contry" className='h-20 mx-auto rounded-md mb-1' />
          <h2 className='font-bold mb-2'> {countryName} </h2>
          <ul className='text-left text-sm flex flex-col gap-1 mb-3'>
              <li> <b> Visa Type: </b> {visaType} </li>
              <li> <b> Procession Time: </b> {processingTime} </li>
              <li> <b> Fee: </b> {fee} </li>
              <li> <b> Validity: </b> {validity} </li>
              <li> <b> Application Method: </b> {applicationMethod} </li>
              <li> <b> Applied Date: </b> {appliedDate} </li>
              <li> <b> Applicant's Name: </b> {firstName + ' ' + lastName} </li>
              <li> <b> Applicant's Email: </b> {email} </li>
          </ul>
          <button className='bg-red-500 px-5 rounded-md font-bold py-1 text-white text-sm' onClick={() => handleCancel(_id)}> Cancel </button>
      </div>
    )
}
