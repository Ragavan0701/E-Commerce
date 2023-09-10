import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const TopCart = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
      };
  return (
    <>
    <Slider {...settings}>
    {
        
        Tdata.map((value,index)=> {
            return (
                <>
                <div className= 'box product' key={index}>
                    <div className='nametop d_flex'>
                        <span className='tleft'>{value.para}</span>
                        <span className='tright'>{value.desc}</span>
                    </div>
                    <div className="top-img">
                        <img src={value.cover} alt="" srcset="" />
                        <img src={value.cover1} alt="" srcset="" />
                        <img src={value.cover2} alt="" srcset="" />
                       

                    </div>
                </div>
                </>
            )
        })
        
    }
    </Slider></>
  )
}

export default TopCart