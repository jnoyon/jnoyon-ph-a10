import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom'

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;
        const user = {name, email, photourl, password}
        console.log(user)
    }
  return (
    <div className="flex items-center justify-center min-h-lvh">
      <Helmet>
            <title> Registration - Visa Navigator </title>
      </Helmet>
      <div className="bg-base-300 p-5 flex flex-col gap-2 rounded-md shadow-md">
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
        <p className="text-sm"> Already have Account? <Link to='/login' className="text-secondary"> Login </Link> </p>
      </div>
    </div>
  )
}
