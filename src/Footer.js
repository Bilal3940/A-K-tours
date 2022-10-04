import React from "react"
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube,FaInstagram } from "react-icons/fa";
function Footer(){
    return(
<div className="footer-distributed">

<div className="footer-left">
    <h3><span>A-K Tours</span></h3>

    <p className="footer-links">
      <a href="/my-app">Home </a>
      |
      <a href="/Reviews">Reviews</a>
      |
      <a href="/Contact">Contact</a>
    </p>

    <p className="footer-company-name">© 2022 A-K Tours Pvt. Ltd.</p>
</div>

<div className="footer-center">
  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>411 - Gulistan colony,Sector - 1</span>
      Wah Cantt, Islamabad Pakistan - 400710</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+92-37782183</p>
  </div>
  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:bjavaid3940@gmail.com?subject=hello how are you">AKtours@gmail.com</a></p>
  </div>
</div>
<div className="footer-right">
  <p className="footer-company-about">
    <span>About the company</span>
    We beleive in making your Holidays a pleasure with our amazing tour pakages.
  </p>
  <div className="footer-icons">
    <a href="/"><i className="fa fa-facebook"><FaFacebook/></i></a>
    <a href="/"><i className="fa fa-twitter"><FaTwitter/></i></a>
    <a href="/"><i className="fa fa-instagram"><FaInstagram/></i></a>
    <a href="/"><i className="fa fa-linkedin"><FaLinkedin/></i></a>
    <a href="/"><i className="fa fa-youtube"><FaYoutube/></i></a>
  </div>
</div>
</div>
    )
}
export default Footer;