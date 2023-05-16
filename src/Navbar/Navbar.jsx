import React from 'react'
import './navbar.css'
import brandlogo from '../Asset/a_logo_white.png'


const Navbar = () => {
  return (
<nav class="navbar navbar-expand-xl navbar-light navbar-bgcolor    ">
  <div class="container ">
    <a class="navbar-brand" href="#">
      <img src={brandlogo} alt="" style={{width:"192px",height:'60px'}}  className="navbar-brand-image "/>
    </a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="https://aci.com.pk/index.php">Home</a>
        </li>
       

        <div class="dropdown">
        <li class="nav-item">
          <a class="nav-link about dropbtn " href="https://aci.com.pk/about.php ">ABOUT US</a>
          </li>
  {/* <button class="dropbtn  d-lg-none">Dropdown</button> */}
  <div class="dropdown-content text-center  ">
    <a href="#">COMPANY PROFILE</a>
    <hr />
    <a href="#">OUR TEAM</a>
    <hr />
    <a href="#">ENVIRONMENTAL POLICY</a>
    <hr />
    <a href="#">CERTIFICATIONS</a>
  </div>
</div>


<div class="dropdown">
        <li class="nav-item">
          <a class="nav-link" href="https://aci.com.pk/products.php">PRODUCTS</a>
        </li>
        <div class="dropdown-content text-center ">
   <li>
    <a href="#" >SULPHARIC ACID </a>
    </li>
    <hr />
    <a href="#" >FORMIN ACID</a>
    <hr />
    <a href="#">SULPHONIC ACID (LABSA)</a>
    <hr />
    <a href="#">SODIUM SULPHATE</a>
    <hr />
    <a href="#">ALUMINUM SULPHATE </a>
    <hr />
    <a href="#">ACETIC</a>
    <hr />
    <a href="#">SINGLE SUPER PHOSPHATE (SSP)</a>
    
  </div>
</div>
<div class="dropdown">
        <li class="nav-item">
          <a class="nav-link" href="https://aci.com.pk/products.php#">GROUP COMPANIES</a>
        </li>
        <div class="dropdown-content text-center  ">
    <a href="#">AKBARI STORE(PVT.) LTD.</a>
    <hr />
    <a href="#">AKBARI PAPPER STORE LAHORE</a>
    <hr />
    <a href="#">AKBARI INTERNATIONAL CORPORATION</a>
    <hr />
    <a href="#">AKBARI PYBLIC SCHOOL (TRUST)</a>
  </div>
</div>

        <li class="nav-item">
          <a class="nav-link" href="https://aci.com.pk/careers.php">CAREERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://aci.com.pk/index.php#event_section">EVENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://aci.com.pk/contact.php">CONTACT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link webmail" href="https://webmail.mukhost.uk/" >WEBMAIL</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar