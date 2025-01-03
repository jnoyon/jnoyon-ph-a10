import React from 'react'
import { Link } from 'react-router-dom';

export default function VisaApplicationItem({application}) {
    const {_id, date, countryName, visaType, processingTime, validPassport, visaApplicationForm, passportPhoto, bio, ageRestriction, fee, validity, applicationMethod } = application;
    const handleCancel = (_id) => {
        console.log(_id);
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
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
                  swal("Poof! Your imaginary file has been deleted!", {
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
            swal("Your imaginary file is safe!");
          }
        });
      };
    return (
      <div className='bg-base-200 shadow-sm rounded-md p-2 text-center'>
          <img src={fee} alt="contry" className='h-20 mx-auto rounded-md mb-1' />
          <h2 className='font-bold mb-2'> {countryName} </h2>
          <ul className='text-left text-sm flex flex-col gap-1 mb-3'>
              <li> <b> Visa Type: </b> {visaType} </li>
              <li> <b> Procession Time: </b> {date} </li>
          </ul>
          <button className='bg-red-500 px-5 rounded-md font-bold py-1 text-white text-sm' onClick={() => handleCancel(_id)}> Cancel </button>
      </div>
    )
}
