import React, { useState } from "react";
import swal from "sweetalert";

export default function MyAddedVisaItem({ visa, setVisas }) {
  const {
    _id,
    countryImageUrl,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;

  const [currentVisa, setCurrentVisa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Visa!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/visa/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.deletedCount);
            if (data.deletedCount > 0) {
              swal("Visa has been deleted!", {
                icon: "success",
              });
              setVisas((prevVisas) => prevVisas.filter((visa) => visa._id !== _id));
            } else {
              swal("Visa can be deleted!", {
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
        swal("Visa is safe!");
      }
    });
  };

  const handleUpdate = (visa) => {
    setCurrentVisa(visa);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setCurrentVisa((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/visa/${currentVisa._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Visa has been updated!", {
          icon: "success",
        });
        setVisas((prevVisas) =>
          prevVisas.map((visa) =>
            visa._id === currentVisa._id ? { ...visa, ...currentVisa } : visa
          )
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        swal("Error updating visa!", {
          icon: "error",
        });
        console.log("Error updating visa: ", error);
      });
  };

  return (
    <>
      <div className="bg-base-200 shadow-sm rounded-md p-2 text-center">
        <img
          src={countryImageUrl}
          alt="country"
          className="h-20 mx-auto rounded-md mb-1"
        />
        <h2 className="font-bold mb-2"> {countryName} </h2>
        <ul className="text-left text-sm flex flex-col gap-1 mb-3">
          <li>
            <b> Visa Type: </b> {visaType}
          </li>
          <li>
            <b> Procession Time: </b> {processingTime}
          </li>
          <li>
            <b> Fee: </b> {fee}
          </li>
          <li>
            <b> Validity: </b> {validity}
          </li>
          <li>
            <b> Application Method: </b> {applicationMethod}
          </li>
        </ul>
        <div className="flex gap-2 justify-center">
          <button
            className="bg-green-500 px-5 rounded-md font-bold py-1 text-white text-sm"
            onClick={() => handleUpdate(visa)} 
          >
            Update
          </button>
          <button
            className="bg-red-500 px-5 rounded-md font-bold py-1 text-white text-sm"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay fixed top-0 left-1/3">
          <div className="modal-box ">
            <div className="modal-action  ">
              {currentVisa && (
                <form method="dialog" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label className="font-bold">Country Image</label>
                    <input
                      type="url"
                      name="countryImageUrl"
                      className="input input-bordered"
                      value={currentVisa.countryImageUrl}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Country Name</label>
                    <input
                      type="text"
                      name="countryName"
                      className="input input-bordered"
                      value={currentVisa.countryName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Visa Type</label>
                    <select
                      name="visaType"
                      className="select select-bordered"
                      value={currentVisa.visaType}
                      onChange={handleChange}
                    >
                      <option value="Student Visa">Student Visa</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Official Visa">Official Visa</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Processing Time</label>
                    <input
                      type="text"
                      name="processingTime"
                      className="input input-bordered"
                      value={currentVisa.processingTime}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-2">
                    <h2 className="font-bold">Required Documents</h2>
                    <div className="flex flex-col md:flex-row gap-2 border border-solid border-base-300 rounded-md p-1">
                      <label className="label cursor-pointer flex justify-start gap-2">
                        <input
                          type="checkbox"
                          name="validPassport"
                          className="checkbox"
                          checked={currentVisa.validPassport}
                          onChange={handleChange}
                        />
                        <span className="label-text font-bold">Valid Passport</span>
                      </label>

                      <label className="label cursor-pointer flex justify-start gap-2">
                        <input
                          type="checkbox"
                          name="visaApplicationForm"
                          className="checkbox"
                          checked={currentVisa.visaApplicationForm}
                          onChange={handleChange}
                        />
                        <span className="label-text font-bold">
                          Visa Application Form
                        </span>
                      </label>

                      <label className="label cursor-pointer flex justify-start gap-2">
                        <input
                          type="checkbox"
                          name="passportPhoto"
                          className="checkbox"
                          checked={currentVisa.passportPhoto}
                          onChange={handleChange}
                        />
                        <span className="label-text font-bold">
                          Recent Passport Sized Photograph
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Bio</label>
                    <textarea
                      name="bio"
                      className="textarea textarea-bordered"
                      value={currentVisa.bio}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Age Restriction</label>
                    <input
                      type="number"
                      name="ageRestriction"
                      className="input input-bordered"
                      value={currentVisa.ageRestriction}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Fee</label>
                    <input
                      type="number"
                      name="fee"
                      className="input input-bordered"
                      value={currentVisa.fee}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-bold">Validity</label>
                    <input
                      type="text"
                      name="validity"
                      className="input input-bordered"
                      value={currentVisa.validity}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col mb-2">
                    <label className="font-bold">Application Method</label>
                    <input
                      type="text"
                      name="applicationMethod"
                      className="input input-bordered"
                      value={currentVisa.applicationMethod}
                      onChange={handleChange}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Update Visa"
                    className="btn col-span-3 btn-secondary mr-2"
                  />

                  <button
                    type="button"
                    className="btn"
                    onClick={() => setIsModalOpen(false)} 
                  >
                    Close
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
