import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.scss"

const Detail = () => {
    const {id}=useParams()
    const [detail,setDetail]=useState({})
    useEffect(()=>{
axios.get(`http://localhost:8081/ports/${id}`).then((res)=>{
    setDetail(res.data)
})
    },[])
    console.log(detail)
  return (
    <div className='detail__page'>
        <h1>{ <img src={detail?.image} style={{width: '400px', height : '500px'}} alt="" /> }</h1>
        <div>
        <h1>{detail?.name}</h1>
        <p>{detail?.desc}</p>
        <h3>${detail?.price}</h3>
        </div>
    </div>
  )
}

export default Detail