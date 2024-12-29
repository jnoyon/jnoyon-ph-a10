import { FaHandsHelping } from "react-icons/fa";

export default function Features() {
  return (
    <div className='mx-auto w-11/12 container'>
        <div className="title">
            <h2 className="font-bold text-center text-3xl md:text-5xl uppercase mb-5"> Our Features</h2>
            <h3 className='divider font-bold uppercase'> Why We Are Best? </h3>
        </div>
        <div className="grid grid-cols-3 gap-5">
            <div className="item bg-base-200 rounded-md text-center px-2 py-5 shadow-sm">
                <FaHandsHelping className="text-5xl mx-auto text-red-300 mb-2" />
                <h2 className='font-bold uppercase mb-2'> 24/7 Support </h2>
                <p className='text-sm'>Always available to assist with your visa queries and concerns, day or night.</p>
            </div>
            <div className="item bg-base-200 rounded-md text-center px-2 py-5 shadow-sm">
                <FaHandsHelping className="text-5xl mx-auto text-red-300 mb-2" />
                <h2 className='font-bold uppercase mb-2'> Real-Time Tracking </h2>
                <p className='text-sm'>Monitor your visa application status instantly with timely updates and progress notifications.</p>
            </div>
            <div className="item bg-base-200 rounded-md text-center px-2 py-5 shadow-sm">
                <FaHandsHelping className="text-5xl mx-auto text-red-300 mb-2" />
                <h2 className='font-bold uppercase mb-2'> Secure Document Uploads </h2>
                <p className='text-sm'>Your personal data and documents are encrypted for safety, ensuring complete privacy and protection.</p>
            </div>
            <div className="item bg-base-200 rounded-md text-center px-2 py-5 shadow-sm">
                <FaHandsHelping className="text-5xl mx-auto text-red-300 mb-2" />
                <h2 className='font-bold uppercase mb-2'> Expert Consultation Services </h2>
                <p className='text-sm'> Receive professional guidance from experienced consultants for a seamless and hassle-free visa process.</p>
            </div>
            <div className="item bg-base-200 rounded-md text-center px-2 py-5 shadow-sm">
                <FaHandsHelping className="text-5xl mx-auto text-red-300 mb-2" />
                <h2 className='font-bold uppercase mb-2'> Fast Processing Times </h2>
                <p className='text-sm'> Streamlined processes minimize delays, ensuring your visa approval is quick, smooth, and efficient.</p>
            </div>
            <div className="item bg-base-200 rounded-md text-center px-2 py-5 shadow-sm">
                <FaHandsHelping className="text-5xl mx-auto text-red-300 mb-2" />
                <h2 className='font-bold uppercase mb-2'> User-Friendly Interface </h2>
                <p className='text-sm'>Navigate effortlessly through our portal with a simple, intuitive design for all users.</p>
            </div>
            
        </div>
    </div>
  )
}
