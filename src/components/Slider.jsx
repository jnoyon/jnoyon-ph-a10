import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


const slideImages = [
    {
      url: 'https://tp.jihadur.com/wp-content/uploads/2025/01/banner.png',
    },
    {
      url: 'https://tp.jihadur.com/wp-content/uploads/2025/01/banner-2.png',
    },
    {
      url: 'https://tp.jihadur.com/wp-content/uploads/2025/01/banner-3.png',
    },
  ];
export default function Slider() {
  return (
    <div className="container mx-auto w-11/12 mt-5">
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='w-full rounded-md h-48 md:h-[500px] bg-cover' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  )
}
