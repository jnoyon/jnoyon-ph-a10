import React from 'react'
import { Helmet } from 'react-helmet'
import swal from 'sweetalert';
export default function AddVisa() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extracting form data using the form element names
    const countryImageUrl = e.target.countryimageurl.value;
    const countryName = e.target.countryname.value;
    const visaType = e.target.visatype.value;
    const processingTime = e.target.processingtime.value;
    const validPassport = e.target.validpassport.checked;
    const visaApplicationForm = e.target.visaapplicationform.checked;
    const passportPhoto = e.target.passportphoto.checked;
    const bio = e.target.bio.value;
    const ageRestriction = e.target.agerestriction.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const applicationMethod = e.target.applicationmethod.value;

    // You can now use these values to send to an API, or handle however you need
    const newVisa = {countryImageUrl,
      countryName,
      visaType,
      processingTime,
      validPassport,
      visaApplicationForm,
      passportPhoto,
      bio,
      ageRestriction,
      fee,
      validity,
      applicationMethod}
      console.log(newVisa)

      // 
      fetch('http://localhost:5000/all-visa', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newVisa)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          swal({
            title: 'Success',
            text: 'Visa Added Successfully',
            icon: 'success',
          });
        }
      })
  }
  return (
    <div className='container mx-auto w-11/12 py-5'>
      <Helmet>
            <title> Add Visa - Visa Navigator </title>
      </Helmet>
        <div className="title">
            <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Add Visa </h2>
            <h3 className='divider font-bold uppercase'> Fill up the form </h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row flex-wrap justify-between gap-5 bg-base-300 p-5 rounded-md">
        <input
          type="url"
          name="countryimageurl"
          className="input input-bordered"
          placeholder="Country Image"
        />
        <input
          type="text"
          name="countryname"
          className="input input-bordered"
          placeholder="Country Name"
        />
        <select
          name="visatype"
          className="select select-bordered"
        >
          <option value="Student Visa">Student Visa</option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Official Visa">Official Visa</option>
        </select>
        <input
          type="text"
          name="processingtime"
          className="input input-bordered"
          placeholder="Processing Time"
        />
        <div className="flex flex-col md:flex-row gap-2">
          <label className="label cursor-pointer flex gap-2">
            <input
              type="checkbox"
              name="validpassport"
              className="checkbox"
            />
            <span className="label-text">Valid Passport</span>
          </label>
          <label className="label cursor-pointer flex gap-2">
            <input
              type="checkbox"
              name="visaapplicationform"
              className="checkbox"
            />
            <span className="label-text">Visa Application Form</span>
          </label>
          <label className="label cursor-pointer flex gap-2">
            <input
              type="checkbox"
              name="passportphoto"
              className="checkbox"
            />
            <span className="label-text">Recent Passport Sized Photograph</span>
          </label>
        </div>
        <textarea
          name="bio"
          className="textarea textarea-bordered"
          placeholder="Bio"
        />
        <input
          type="number"
          name="agerestriction"
          className="input input-bordered"
          placeholder="Age Restriction"
        />
        <input
          type="number"
          name="fee"
          className="input input-bordered"
          placeholder="Fee"
        />
        <input
          type="text"
          name="validity"
          className="input input-bordered"
          placeholder="Validity"
        />
        <input
          type="text"
          name="applicationmethod"
          className="input input-bordered"
          placeholder="Application Method"
        />
        <input
          type="submit"
          value="Add Visa"
          className="btn col-span-3 btn-secondary"
        />
      </form>
    </div>
  )
}
