import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div>
        <div className='footer__div'>
        <div>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatum deserunt voluptates <br /> impedit, autem reprehenderit eius?</p>
        </div>
        <div className='footer__div'>
            <div >
            <h3>Quick Links</h3>
                <p>Sell online</p>
                <p>Features</p>
                <p>Shopping cart</p>
                <p>Store builder</p>
            </div>
            <div className='footer__p'>
            <p>Mobile commerce</p>
                <p>Dropshipping</p>
                <p>Website development</p>
            </div>
            <div className='footer__p'>
            <p>Point of sale</p>
                <p>Hardware</p>
                <p>Software</p>
            </div>
        </div>
        <div>
            <h3>Contact Info</h3>
            <p><i class="fa-solid fa-location-dot"></i> 203 Fake St. Mountain View, <br /> San Francisco, California, USA</p>
            <p><i class="fa-solid fa-phone"></i> +2 392 3929 210</p>
            <p><i class="fa-solid fa-message"></i> emailaddress@domain.com</p>
        </div>
    </div>
    <div className='input'>
        <input type="text" placeholder='Email'/><button className='btn btn-primary'>Send</button>
    </div>
    </div>
  )
}

export default Footer