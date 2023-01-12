import React from 'react'
import './about.css'
import Aboutusimg from '../../src/Asset/dummy.jpg'


const Aboutus = () => {
  return (
    <>
<div className="aboutus-bgcolor">
  <div className="container pt-3 pb-5">
    <div className="row pt-5">
      <div className="col">
        <h2 className='heading-aboutus'>ABOUT US</h2>
        <hr className='aboutus-hr' />
        <p className='aboutus-text'>Akbari Chemical Industries Private Limited (ACI) was established in 1979 with a vision to produce quality industrial chemicals and to give support to nation’s export potential. Since, its humble inception in 1979 with a Sulphuric Acid Plant, ACI has grown and expanded adding several important industrial chemicals to its products range over three decades. Today, the company’s product range in addition to Sulphuric Acid includes Formic Acid, Aluminium Sulphate, Sodium Sulphate, Single Super Phosphate (SSP), Acetec® and Sulphonic Acid (LABSA). All the products are manufactured on imported technology plants from China, Italy and United Kingdom. Establishment of a Linear Alkyl Benzene Sulphonic Acid (LABSA) or simply ‘Sulphonic acid’ (soft grade) production plant is the latest diversification project of ACI. Keeping in view the gap in supply and demand, ACI is already in process to expand its production facility in near future Insha’Allah.</p>
      </div>
      <h2 className='heading-ceomessage'>CEO MESSAGE</h2>
      <hr className='ceomessage-hr' />
      
    </div>
    <div className="row">
      <div className="col-lg-6 col-sm-12">
      
        <p className='ceomessage-text'> I am pleased to welcome you to the Akbari Chemical Industries (Pvt.) Ltd. (ACI) website. Whether you’re a potential customer with a challenging project ahead; an existing customer checking up on our latest news; or a partner, supplier or future employee looking for new opportunities, I trust you’ll find what you’re looking for here.ACI is a company that is Driving Progress and, with our customers and partners, building better communities through safe, smart, efficient infrastructure. Something we have been doing consistently since 1948.Our progressive thinking and creative approach is what makes us stand out from the crowd. It’s why so many of our customers keep coming back to us.We have a clear vision of what we want to be - leaders in infrastructure development; and we guide our business using five core values - lead, grow, deliver, sustain and protect. I’m proud of the work we do and give you my personal commitment that we will deliver what we promise and do it safely and sustainably.Enjoy our website and feel free to contact us for any additional information.
        <br />
Yours Sincerely,
<br />
Monem Akbar
<br />
Chief Executive Officer</p>
      </div>
      <div className="col-lg-6 col-sm-12">
        <img src={Aboutusimg } className="aboutusside-img  img-fluid" alt="" />
      </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Aboutus