import React from 'react'
import './navbarimg.css'
import img1 from '../Asset/Slider1.jpg';
import img2 from '../Asset/Slider3.jpg';
import img3 from '../Asset/Slider4.jpg';


const NavbarImgslider = () => {
  return (
    

    
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4000">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  )
}

export default NavbarImgslider