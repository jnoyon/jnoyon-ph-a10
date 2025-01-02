import React from "react";
import swal from "sweetalert";
export default function MyAddedVisaItem({ visa }) {
  const {
    _id,
    countryImageUrl,
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
    applicationMethod,
  } = visa;

  const handleDelete = (_id) => {
    console.log(_id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
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

  const handleUpdate = (_id) => {
    console.log(_id);
    document.getElementById("my_modal_1").showModal();

    fetch(`http://localhost:5000/visa/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa)
    })

  };
  return (
    <>
      <div className="bg-base-200 shadow-sm rounded-md p-2 text-center">
        <img
          src={countryImageUrl}
          alt="contry"
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
            onClick={() => handleUpdate(_id)}
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
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <div className="flex flex-col">
                <label className="font-bold">Country Image</label>
                <input
                  type="url"
                  name="countryimageurl"
                  className="input input-bordered"
                  defaultValue={countryImageUrl}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-bold">Country Name</label>
                <input
                  type="text"
                  name="countryname"
                  className="input input-bordered"
                  defaultValue={countryName}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-bold">Visa Type</label>
                <select
                  name="visatype"
                  className="select select-bordered"
                  defaultChecked={visaType}
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
                  name="processingtime"
                  className="input input-bordered"
                  defaultValue={processingTime}
                />
              </div>

              <div className="col-span-2">
                <h2 className="font-bold">Required Documents</h2>
                <div className="flex flex-col md:flex-row gap-2 border border-solid border-base-300 rounded-md p-1">
                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="checkbox"
                      name="validpassport"
                      className="checkbox"
                      defaultValue={validPassport}
                    />
                    <span className="label-text font-bold">Valid Passport</span>
                  </label>

                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="checkbox"
                      name="visaapplicationform"
                      className="checkbox"
                      defaultChecked={visaApplicationForm}
                    />
                    <span className="label-text font-bold">
                      Visa Application Form
                    </span>
                  </label>

                  <label className="label cursor-pointer flex justify-start gap-2">
                    <input
                      type="checkbox"
                      name="passportphoto"
                      className="checkbox"
                      defaultChecked={passportPhoto}
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
                  defaultValue={bio}
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label className="font-bold">Age Restriction</label>
                <input
                  type="number"
                  name="agerestriction"
                  className="input input-bordered"
                  defaultValue={ageRestriction}
                />
              </div>

              <div className="flex flex-col">
                <label className="font-bold">Fee</label>
                <input
                  type="number"
                  name="fee"
                  className="input input-bordered"
                  placeholder="Fee"
                  defaultValue={fee}
                  
                />
              </div>

              <div className="flex flex-col">
                <label className="font-bold">Validity</label>
                <input
                  type="text"
                  name="validity"
                  className="input input-bordered"
                  placeholder="Validity"
                  defaultValue={validity}
                />
              </div>

              <div className="flex flex-col mb-2">
                <label className="font-bold">Application Method</label>
                <input
                  type="text"
                  name="applicationmethod"
                  className="input input-bordered"
                  placeholder="Application Method"
                  defaultValue={applicationMethod}
                />
              </div>

              <input
                type="submit"
                value="Update Visa"
                className="btn col-span-3 btn-secondary"
              />

              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
