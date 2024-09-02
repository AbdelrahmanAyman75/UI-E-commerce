import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Img1 from "../../Assets/imges/Slider/ROXINE1.jpg"
import Img2 from "../../Assets/imges/Slider/ROXINE12.jpg"
import Img3 from "../../Assets/imges/Slider/ROXINE11.jpg"
import Img4 from "../../Assets/imges/Slider/ROXINE3.jpg"



export default function SliderCom() {
  return (
    <>
    <div className= 'header w-100  mb-3 container '>
    <OwlCarousel autoplay={true} loop={true} autoplayTimeout={1000} items={1}  >
    <div className='item'>
        <img className='w-100' src={Img2} alt="jpg" />
    </div>
    <div className='item'>
        <img className='w-100' src={Img3} alt="jpg" />
    </div>
    <div className='item'>
        <img className='w-100' src={Img4} alt="jpg" />
    </div>


</OwlCarousel>
    </div>

    </>
  )
}
