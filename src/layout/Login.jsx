import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-lvh">
      <Helmet>
            <title> Login - Visa Navigator </title>
      </Helmet> 
      <div className="bg-base-300 p-5 flex flex-col gap-2 rounded-md shadow-md">
        <form className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
            Email <input type="text" className="grow" placeholder="Enter Email" />{" "}
            </label>
            <label className="input input-bordered flex items-center gap-2">
            Password <input
                type="password"
                className="grow"
                placeholder="Enter Password"
            />
            </label>
            <input type="submit" value="Login" className="btn btn-secondary" />
        </form>
        <p className="text-sm"> Don't have Account? <Link to='/register' className="text-secondary"> Register Now </Link> </p>
        <p className="text-sm"> Forgot Password? <Link to='/password-reset' className="text-secondary"> Reset Now </Link> </p>
      </div>
    </div>
  );
}
