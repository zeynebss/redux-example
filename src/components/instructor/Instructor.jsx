import React from 'react'
import './instructor.scss'

const Instructor = () => {
  return (
    <section className="instructor">
        <div className="container">
            <div className="row align-items-center justify-content-between">
         <div className="col-lg-5">
  <div className="image-box">
      <img src="./images/instructor-1x-v3.jpg" alt="" className="img-fluid" />
  </div>

         </div>
         <div className="col-lg-7">
             <div className="text-box-i">
                 <h4>Become an instructor</h4>
                 <p>Instructors from around the world teach <br /> millions 
                     of students on Udemy. We provide the <br /> tools and skills to teach what you love.</p>
                     <button type="button " className="btn btn-dark">Start teaching today</button>
             </div>
         </div>
            </div>
          
        </div>
        <div className="instructor-end">
                <h2>Trusted by companies of all sizes</h2>
                <div className="instructor-img d-flex align-item-center justify-content-center">
                    <img src="./images/n.svg" alt="" />
                    <img src="./images/b.svg" alt="" />
                    <img src="./images/n2.svg" alt="" />
                    <img src="./images/e.svg" alt="" />
                </div>
            </div>
       </section>
  )
}

export default Instructor