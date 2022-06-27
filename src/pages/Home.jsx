import React from 'react'
import HomeSlider from '../components/slider/HomeSlider'
import Footer from '../components/footer/Footer'
import OneCourse from '../components/onecourse/OneCourse'
import Categories from '../components/categories/Categories'
import Instructor from '../components/instructor/Instructor'
import UdemyBus from '../components/udemy-bus/UdemyBus'
import AllCourses from '../components/allcourses/AllCourses'

const Home = () => {
  return (
      <>
        <HomeSlider/>
        <Categories/>
        <Instructor/>
        <UdemyBus/>
      <AllCourses/>
    <Footer/>
    </>
    
  )
}

export default Home