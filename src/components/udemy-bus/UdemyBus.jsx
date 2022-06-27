import React from 'react'
import './udemy-bus.scss'

const UdemyBus = () => {
  return (
    <section className="udemy-bus">
        <div className="container">
            <div className="row align-items-center justify-content-between">
       
         <div className="col-lg-7">
             <div className="text-box-p">
         <img className="img-fluid" src="./iamges/logo-ub.svg" alt="" />

               <p>Get unlimited access to 15,000+ of Udemy’s <br/>
                      top courses for your team. Learn and improve <br/> skills across business, tech, design, and more..</p>
                     <button type="button " className="btn btn-dark">Get Udemy Business</button>
             </div>
         </div>
         <div className="col-lg-5">
  <div className="image-box">
      <img src="./images/ub-1x-v3.jpg" alt="" className="img-fluid" />
  </div>

         </div>
            </div>
        </div>
       </section>
  )
}

export default UdemyBus