import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../resourses/Slide1.jpg'
import slide2 from '../resourses/Slide2.jpg'
import slide3 from '../resourses/Slide(3).jpg'

function Popular() {
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
        
            {
              breakpoint: 768,    // For mobile devices
              settings: {
                slidesToShow: 2,  // Show 1 slide for mobile devices
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 475,    // For mobile devices
                settings: {
                  slidesToShow: 1,  // Show 1 slide for mobile devices
                  slidesToScroll: 1,
                }
              }
          ]
      };

  return (
    <>
    <h2 style={{textAlign:'center', color:'blue', textDecoration:'underline', margin:'60px 0', fontSize:'32px',letterSpacing:'1.2'}}>Popular Stocks</h2>
    <div>
       <Slider {...settings}>
      <div>
       <img src={slide1} alt='slide'/>
      </div>
      <div>
      <img src={slide2} alt='slide'/>
      </div>
      <div>
      <img src={slide3} alt='slide'/>
      </div>
      <div>
      <img src={slide1} alt='slide'/>
      </div>
      <div>
      <img src={slide2} alt='slide'/>
      </div>
      <div>
      <img src={slide3} alt='slide'/>
      </div>
    </Slider>
    </div>
    </>
    
  )
}

export default Popular
