import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../providers/AuthProvider";

export default function Login() {
  const {loginUser, loginWithGoogle} = useContext(AuthContext);
  
  const failedNotification = (error) => toast.error( error);
  const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch( error => {
          failedNotification(error.message);
        })
  }

  const handleLoginWithGoogle =() => {
    loginWithGoogle()
    .then(result => {
      console.log(result.user)
    })
    .catch( error => {
      failedNotification(error.message);
    })
  }
  return (
    <div className="flex items-center justify-center min-h-lvh">
      <Helmet>
            <title> Login - Visa Navigator </title>
      </Helmet>
      <ToastContainer position="top-center"  autoClose={2000} theme="light" /> 
      <div className="bg-base-300 md:w-1/3 p-5 flex flex-col gap-2 rounded-md shadow-md">
      <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Login </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
            Email <input type="email" name="email" className="grow" placeholder="Enter Email" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Password <input
                type="password"
                className="grow"
                placeholder="Enter Password"
                name="password"
            />
            </label>
            <input type="submit" value="Login" className="btn btn-secondary" />
        </form>
        <p className="text-sm"> Don't have Account? <Link to='/register' className="text-secondary"> Register Now </Link> </p>
        <p className="text-sm"> Forgot Password? <Link to='/password-reset' className="text-secondary"> Reset Now </Link> </p>
        <button onClick={handleLoginWithGoogle} className="btn btn-wide btn-primary"> Login with Gmail </button>
      </div>
    </div>
  );
}
