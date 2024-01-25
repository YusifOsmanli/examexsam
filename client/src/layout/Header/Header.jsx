import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div>
        <h4>D E A L E R S</h4>
        </div>
        <div className='header__p'>
        <p>Collection</p>
        <p>Shop</p>
        <p>Catalogs</p>
        <p>Contact</p>
        <Link className='none' to={"/Add"}><p >Add page</p></Link>
        </div>
        <div className='header__i'>
        <p><i class="fa-solid fa-magnifying-glass"></i></p>
        <Link to={'/Wishlist'}><p><i class="fa-regular fa-heart"></i></p></Link>
        <Link to={"/Basket"}><p><i class="fa-brands fa-shopify"></i></p></Link>
        </div>
    </div>
  )
}

export default Header