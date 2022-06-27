import React from 'react'
import './footer.scss' 
import {GrLanguage} from 'react-icons/gr'
const Footer = () => {
  return (
  <footer id="footer">
    <div className="footer-area">
     <div className="container">
      <div className=" up row align-items-center justify-content-between">
    <div className="list-1 col-lg-2">
    <ul className="list-unstyled">
          <li>Udemy Business</li>
          <li>Teach on Udemy</li>
         <li>Get the App</li>
          <li>About us</li>
          <li>Contact us</li>
      </ul>
    </div>
    <div className="list-1 col-lg-2">
    <ul className="list-unstyled">
          <li>Careers</li>
          <li>Blog</li>
         <li>Help and support</li>
          <li>Affiliate</li>
          <li>Investors</li>
      </ul>
    </div>
    <div className="list-1 col-lg-5">
    <ul className="list-unstyled">
          <li>Terms</li>
          <li>Privacy policy</li>
         <li>Cookie settings</li>
          <li>Sitemap</li>
          <li>Accessibility statement</li>
      </ul>
    </div>
      <div className="col-lg-2">
   <button> {<GrLanguage/>} English</button>
      </div>
      </div> 
      <div className=" down row align-items-center justify-content-between">
        <div className="logo-area col-lg-10">
            <img src="/images/logo-udemy-inverted.svg" alt="" />
        </div>
        <div className="col-lg-2">
 <span>© 2022 Udemy, Inc.</span>
        </div>
      </div>
     </div>
      </div>
  </footer>
  )
}

export default Footer