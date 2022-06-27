import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container } from "@chakra-ui/react";
import "./home-slider.scss";


const HomeSlider = () => {
  return (
 <Swiper
modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
spaceBetween={50}
slidesPerView={1}
navigation
autoplay={{delay:2000}}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log("slide change")}
className="slider-area"
>
<SwiperSlide className="slider-item">

<img src="/images/slider-1.jpg" alt="simg-1" />

<Container>
<div className="slider-content">
        <div className="slider-box-1 col-lg-5 ">
           <h1>Unlock the power of your people</h1>
            <span>Udemy Business is trusted by 10.5K+ companies around the world. 
                Find out what we can do for yours.</span>
         <label>Find out what we can do for yours.</label>
          </div>
        </div>
</Container>
</SwiperSlide>
<SwiperSlide className="slider-item">
<img src="/images/slider-2.jpg" alt="simg-2" />
<Container>
<div className="slider-content">
<div className="slider-box-2 col-lg-4 ">
           <h1>Learning that gets you</h1>
            <span>Skills for your present (and your future). Get started with us.</span>
          </div>
        </div>
</Container>
</SwiperSlide>

</Swiper> 

  )
}

export default HomeSlider