import { Link } from 'react-router-dom'
import LatestVisaItem from './LatestVisaItem'

export default function LatestVisa({visas}) {

  const latestVisas = visas.slice(-6).reverse();

  return (
    <div className='mx-auto w-11/12 container mb-5'>
        <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Visas </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                  latestVisas.map((visa, index)=> <LatestVisaItem key={index} visa={visa}></LatestVisaItem>)
                }
                
              </div>
             <div className='text-center'>
              <Link className='btn btn-wide btn-primary mt-5 font-bold' to='/all-visa'> All Visa </Link>
             </div>
    </div>
  )
}
