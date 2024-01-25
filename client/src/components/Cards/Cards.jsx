import React, { useContext } from 'react'
import mainContext from '../../context/context'
import { Link } from 'react-router-dom'
import "./Cards.scss"

const Cards = () => {
    const {data,handleAddToWishlist}=useContext(mainContext)
  return (
    <div className='cards__div'>
{
    data.map((item,index)=>{
        return (
            <div  key={index}>
                <div>
                    <img className='card__img' src={item.image} alt="" />
                </div>
                <div>
                <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <h2>${item.price}</h2>
                </div>
                <div>
                    <Link to={`/${item._id}`}><button className='btn btn-primary'>Go Detail</button></Link>
                    <button className='btn btn-dark' onClick={()=>{
                        handleAddToWishlist(item)
                    }}>Add To Wishlist</button>
                </div>
            </div>
        )
    })
}
    </div>
  )
}

export default Cards


