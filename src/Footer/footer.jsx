import React from 'react'
import './footer.css'
import footerLogoImg from '../Asset/a_logo_white.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSkype} from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";


const Footer = () => {
  return (
  <div className="footerBg-Img">
    <div className="container">
      <div className="row py-5 ">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img src={footerLogoImg} alt="footerLogoImg" className='footer-LogoImg img-fluid' />
          <p className='companyDetail-Footer'>Akbari Chemical Industries (Pvt.) Ltd Was established in 1979 with a Vision to produce quality industrial Chemicals and to give support to Nation’s export potential.</p>
          <div className="social-Links py-3">
          <a href=""><FaTwitter/></a>
            <a href=""><FaLinkedin/></a>
            <a href=""><FaFacebookSquare/></a>
            <a href=""><FaSkype/></a>
            <a href=""><FaPinterestSquare/></a>
            
            
            
            
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 ">
        
          
          <ul className=''>
          <h6 className='heading-Footer'> <em>OUR PRODUCT</em> </h6>
          <hr className='footerhr-Line'/>
          <li> <a href="" className='footerLinks'>Sulphuric Acid</a></li>
          <li> <a href="" className='footerLinks'>Formic Acid</a></li>
          <li> <a href="" className='footerLinks'>Sulphonic Acid(LABSA)</a></li>
          <li> <a href="" className='footerLinks'>Sodium Sulphate</a></li>
          <li> <a href="" className='footerLinks'>Aluminium Sulphate</a></li>
          <li> <a href="" className='footerLinks'>ACETEC</a></li>
          <li> <a href="" className='footerLinks'>Sinle Super Phosphate (SSP)</a></li>
          
          
          </ul>
         
       
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
          <h6 className='heading-Footer'> <em>Quick Links</em> </h6>
          <hr className='footerhr-Line'/>
          <ul className='m-0 p-0'><li> <a href="" className='footerLinks'>About Us</a></li>
          <li> <a href="" className='footerLinks'>Careers</a></li>
          <li> <a href="" className='footerLinks'>Get Quote</a></li>
          <li> <a href="" className='footerLinks'>Events</a></li>
        
          
          </ul>
         
       
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-3">
          <h6 className='heading-Footer'> <em>Get in Touch</em> </h6>
          <hr className='footerhr-Line'/>
          <ul className='m-0 p-0'>
          
          <li> <a href="" className='footerLinks lh-1 '>Unit-1: 18Km Multan Road,
Lahore</a></li>
          <li> <a href="" className='footerLinks'>+92 (0)42-3597 1446-8</a></li>
          <li> <a href="" className='footerLinks'>Unit-2: 10Km Faisalabad Road,
Kharianwala SKP</a></li>
          <li> <a href="" className='footerLinks'>Info@Aci.Com.Pk</a></li>
          <li> <a href="" className='footerLinks'>Mon - Sat : 9:00 AM to 5:30 PM</a></li>
        
        
          
          </ul>
         
       
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Footer