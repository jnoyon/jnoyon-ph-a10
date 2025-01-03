import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import auth from '../firebase/firebase.config';

export default function PasswordReset() {
  const emailRef = useRef();
  const emailSentSuccess = () => toast.success('Reset Email Sent')
  const emailSentFailed = () => toast.error('Reset Email Failed')
  const handleSubmit = (e) => {
    e.preventDefault();
    const getMail = emailRef.current.value;
    if(!getMail){
      emailSentFailed();
    }
    else{
      sendPasswordResetEmail(auth, getMail)
      .then(()=> {
        emailSentSuccess();
        
      })
      
    }
    
}
  return (
    <div className='min-h-screen items-center flex justify-center mx-auto container w-11/12'>
      <ToastContainer position="top-center"  autoClose={2000} theme="light" />
      <div className="md:w-1/3 bg-base-300 p-5 rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2" >
            <label className="input input-bordered flex items-center gap-2">
            Email <input type="email" ref={emailRef} name="email" className="grow" placeholder="Enter Email" />{" "}
            </label>
            
            <input type="submit" value="Reset Password" className="btn btn-secondary" />
        </form>
      </div>
    </div>
  )
}
