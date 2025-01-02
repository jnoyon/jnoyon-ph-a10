import LatestVisaItem from './LatestVisaItem'
import VisaItem from './VisaItem'

export default function LatestVisa({visas}) {
  return (
    <div className='mx-auto w-11/12 container mb-5'>
        <h2 className="font-bold text-center text-3xl md:text-5xl uppercase py-5"> All Visas </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                  visas.map((visa, index)=> <LatestVisaItem key={index} visa={visa}></LatestVisaItem>)
                }
              </div>
    </div>
  )
}
