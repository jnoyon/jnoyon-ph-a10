import { useContext, useState } from "react";
import {Helmet} from "react-helmet";
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext} from '../providers/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const failedNotification = (error) => toast.error( error);
    const {createUser, setUser, updateUserProfile, loginWithGoogle} = useContext(AuthContext)
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;

        setErrorMsg('');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
          setErrorMsg('Password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter.');
          return;
        }


        createUser(email, password)
        .then(result => {
          console.log(result.user)
          updateUserProfile({ displayName: name, photoURL: photourl })
          .then(()=>{
            setUser({...result.user, displayName: name, photoURL: photourl})
            navigate('/');
          })
          .catch(error=> {
            console.log(error)
            failedNotification("Registration Failed")
          })
        })

        

        

        .catch( error => {
          failedNotification(error.message);
          setErrorMsg(error.message)
        })
      
    }

    const handleLoginWithGoogle =() => {
      loginWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate("/")
      })
      .catch( error => {
        failedNotification(error.message);
      })
    }
  return (
    <div className="flex items-center justify-center min-h-lvh">
      <Helmet>
            <title> Registration - Visa Navigator </title>
      </Helmet>
      <ToastContainer position="top-center"  autoClose={2000} theme="light" />
      <div className="bg-base-300 md:w-1/3 p-5 flex flex-col gap-2 rounded-md shadow-md">
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Registeration </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
            Name <input type="text" name='name' className="grow" placeholder="Enter Your Name" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Email <input type="text" name='email' className="grow" placeholder="Enter Email" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Photo URL <input type="url" name='photourl' className="grow" placeholder="Enter Photo URL" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Password <input name='password'
                type="password"
                className="grow"
                placeholder="Enter Password"
            />
            </label>
            <input type="submit" value="Register" className="btn btn-secondary" />
        </form>
        <p className="text-sm text-red-500"> { errorMsg} </p>
        <p className="text-sm"> Already have Account? <Link to='/login' className="text-secondary"> Login </Link> </p>
        <button onClick={handleLoginWithGoogle} className="btn btn-wide btn-primary"> Login with Gmail </button>
      </div>
    </div>
  )
}
