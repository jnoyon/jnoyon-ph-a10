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
      fetch('http://localhost:5000/visa', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(newVisa)
      })
      .then(res => res.json())
      .then(data => {
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
        <form onSubmit={handleSubmit} className="md:grid md:grid-cols-3 flex flex-col md:flex-none gap-5 rounded-md">
  <div className="flex flex-col">
    <label className="font-bold">Country Image</label>
    <input
      type="url"
      name="countryimageurl"
      className="input input-bordered"
      placeholder="Country URL"
    />
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Country Name</label>
    <input
      type="text"
      name="countryname"
      className="input input-bordered"
      placeholder="Country Name"
    />
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Visa Type</label>
    <select name="visatype" className="select select-bordered">
      <option value="Student Visa">Student Visa</option>
      <option value="Tourist Visa">Tourist Visa</option>
      <option value="Official Visa">Official Visa</option>
    </select>
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Processing Time</label>
    <input
      type="text"
      name="processingtime"
      className="input input-bordered"
      placeholder="Processing Time"
    />
  </div>
  
  <div className="col-span-2">
    <h2 className="font-bold">Required Documents</h2>
    <div className="flex flex-col md:flex-row gap-2 border border-solid border-base-300 rounded-md p-1">
      <label className="label cursor-pointer flex justify-start gap-2">
        <input type="checkbox" name="validpassport" className="checkbox" />
        <span className="label-text font-bold">Valid Passport</span>
      </label>
      
      <label className="label cursor-pointer flex justify-start gap-2">
        <input type="checkbox" name="visaapplicationform" className="checkbox" />
        <span className="label-text font-bold">Visa Application Form</span>
      </label>
      
      <label className="label cursor-pointer flex justify-start gap-2">
        <input type="checkbox" name="passportphoto" className="checkbox" />
        <span className="label-text font-bold">Recent Passport Sized Photograph</span>
      </label>
    </div>
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Bio</label>
    <textarea
      name="bio"
      className="textarea textarea-bordered"
      placeholder="Bio"
    ></textarea>
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Age Restriction</label>
    <input
      type="number"
      name="agerestriction"
      className="input input-bordered"
      placeholder="Age Restriction"
    />
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Fee</label>
    <input
      type="number"
      name="fee"
      className="input input-bordered"
      placeholder="Fee"
    />
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Validity</label>
    <input
      type="text"
      name="validity"
      className="input input-bordered"
      placeholder="Validity"
    />
  </div>
  
  <div className="flex flex-col">
    <label className="font-bold">Application Method</label>
    <input
      type="text"
      name="applicationmethod"
      className="input input-bordered"
      placeholder="Application Method"
    />
  </div>
  
  <input type="submit" value="Add Visa" className="btn col-span-3 btn-secondary" />
</form>

    </div>
  )
}
