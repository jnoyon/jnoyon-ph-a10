import { MdOutlineWifiCalling3 } from "react-icons/md";

export default function Consult() {
  return (
    <div className='bg-base-300 py-5'>
        <div className="container mx-auto w-11/12">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="left md:w-1/2">
                    <img src="/man.jpg" alt="" className='rounded-full' />
                </div>
                <div className="flex flex-col gap-5 justify-center md:w-1/2">
                    <div className="heading">
                        <p className='text-xl font-bold uppercase mb-1 text-primary'> It is time to </p>
                        <h1 className='text-5xl font-bold uppercase mb-2'> Consult with Our  </h1>
                        <h1 className='text-5xl font-bold text-secondary uppercase'> Professional  </h1>
                    </div>
                    <p className='text-gray-700 text-sm leading-6 text-justify'>It’s time to make your journey seamless! Consult with our professionals for expert visa guidance. Whether for travel, work, or study, we ensure a hassle-free process. Get personalized assistance, quick updates, and support every step of the way. Start your visa application with confidence today! </p>
                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <div className="flex items-center gap-5">
                            <div>
                            <MdOutlineWifiCalling3 className="text-3xl" />

                            </div>
                            <div>
                                <b className='uppercase text-2xl'> Call Now  </b>
                                <p> +880 - 1619 - 756262 </p>
                            </div>
                        </div>
                        <div className="mail btn btn-wide bg-primary text-white">
                            <a href="mailto:jihadur51@gmail.com"> Send Mail </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
