import React from 'react';
import './App.css';
import Topnav from './Top-Nav/Topnav';
import Companybrand from './Company-brandlogo/Companybrand';
import Navbar from './Navbar/Navbar';
import NavbarImgslider from '../src/Navbar-Carousel-Image/NavbarImgslider'
import Product from './Products/Product';
import Contactus from './Contact/Contactus';
import Aboutus from './About us/Aboutus';
import PastEvents from './PastEvents/PastEvents';
import Getintouch from './Get in Touch/getintouch';
import Query from './querySection/query';
import Footer from './Footer/footer';
import CopyRights from './Copyrights/copyRights';


function App() {
  return (
    <>
     <Topnav/>
     <Companybrand/>
     <Navbar/>
     <NavbarImgslider/>
     <Product />
     <Contactus/>
     <Aboutus/>
     <PastEvents/>
     <Getintouch/>
     <Query/>
     <Footer/>
     <CopyRights/>
     
    </>
  );
}

export default App;
