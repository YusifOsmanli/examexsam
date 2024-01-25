import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./Section3.scss"


const Section3 = () => {
  return (
    <div className='section3'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiperslide"
      >
        <SwiperSlide>
            <div>
                <div>
                    <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg.webp" style={{width: '400px', height: '500px'}} alt="" />
                </div>
                <div>
                    <h2>The Shoe</h2>
                    <p> Summer Collection</p>
                    <p>$9.50</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                    <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg.webp" style={{width: '400px', height: '500px'}} alt="" />
                </div>
                <div>
                    <h2>Marc Jacobs Bag</h2>
                    <p> Summer Collection</p>
                    <p>$9.50</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                    <img src="https://preview.colorlib.com/theme/dealers/images/product_3.jpg.webp" style={{width: '400px', height: '500px'}} alt="" />
                </div>
                <div>
                    <h2>The Belt</h2>
                    <p> Summer Collection</p>
                    <p>$9.50</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                    <img src="https://preview.colorlib.com/theme/dealers/images/product_1.jpg.webp"  style={{width: '400px', height: '500px'}} alt="" />
                </div> 
                <div>
                    <h2>The Shoe</h2>
                    <p> Summer Collection</p>
                    <p>$9.50</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
                <div>
                    <img src="https://preview.colorlib.com/theme/dealers/images/product_2.jpg.webp" style={{width: '400px', height: '500px'}} alt="" />
                </div>
                <div>
                    <h2>Marc Jacobs Bag</h2>
                    <p> Summer Collection</p>
                    <p>$9.50</p>
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default Section3