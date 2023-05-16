import React from 'react'
import './product.css'
import productimg1 from '../Asset/711product_239.jpg'

import productimg2 from '../Asset/349product_290.jpg'
import productimg3 from '../Asset/46product_462.jpg'

const Product = () => {
  return (
    <>
    <div className="bg-color">
      <div className="container ">
        <div className="row pt-5 product-row">
          <div className="col-3 ">
            <h2 className='our-product'>OUR PRODUCTS</h2>
          </div>
          <div className="col-9">
            <p className='product-text'><em> Akbari Chemical Industries (Pvt.) Ltd produces quality industrial chemicals and fertilizers at its state of the art chemical facility. A complete list of our products is given below: </em></p>
          </div>

        </div>
        <div className="row py-5">
          <div className="col-md-4 col-sm-10 ">
          <figure>
           <div className="product-container">
          
           <img src={productimg1} alt="" className=' d-block product-img' />
           
            <div className="content">
              <h3>Sulpharic Acid</h3>
            </div>
           </div>
           </figure>
            
            <b>Sulphuric Acid
</b>
<p product-textparagragh>Sulphuric Acid is a strong dibasic acid. in addition, it is also a strong oxidizing and dehydrating agent. It is one of the most widely employed chemicals and enters into many industries, though infrequently appearing in the finished material.</p>
          </div>
          <div className="col-md-4 col-sm-10">
          <figure>
          <div className="main-box">
          <img src={productimg2} alt="" className='img-fluid d-block productimg2' />
          <div className="main-box-text">
            <h3>Sulphonic Acid(LABSA)</h3>
          </div>
          </div>
            
            </figure>
            <b>Sulphonic Acid(LABSA)

</b>
<p product-textparagragh>Linear Alkyl Benzene Sulphonic Acid (LABSA) Dodecyl Benzene Sulphonic Acid (DBSA), or simply Sulphonic Acid are few of the several names given to a type of organic acid that can be represented by the general formula R–SO2 –OH, where ‘R’ is usually a hydrocarbon side chain.</p>
          </div>
          <div className="col-md-4 col-sm-10">
          
          <figure>
          <div className="productBox">
          <img src={productimg3} alt="" className='img-fluid d-block productBox-Image' />
          <div className="productBox-Text">
            <h3>Formic Acid</h3>
          </div>
          </div>

            
            </figure>
            <b>Formic Acid

</b>
<p product-textparagragh>Formic Acid is the simplest and strongest of the series of aliphatic monobasic acids. It can be represented chemically as H–COOH. It is a colourless liquid with a pungent, penetrating odour. It is miscible with water, alcohol, ether, or ethyl acetate.</p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col text-center">
            <a className='viewall-btn'>VIEW ALL</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Product