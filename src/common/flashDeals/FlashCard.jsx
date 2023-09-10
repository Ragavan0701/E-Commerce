import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';

const NextArrow =(props) =>{
  const {onClick} = props 
  return(
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  )
}
const PreArrow =(props) =>{
  const {onClick} = props 
  return(
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  )
}
const FlashCard = ({productItems , addToCart}) => {


const [count , setCount] =useState(0)

const increment = () => {
  setCount(count+1)
}

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreArrow/>,
    
    
    
  };
  return (
    <>
    <Slider {...settings}>
    {
      productItems.map((productItems) =>{

      return (
        
      <div className="box flash">
        <div className="product mtop">
          <div className="img">
            <span className="discount">{productItems.discount}% OFF</span>
            <img src={productItems.cover} alt="" />
            <div className="product-like">
              <label >0</label> <br/>
              <i className="fa-regular fa-heart" onClick={increment}></i>
            </div>
          </div>
          <div className="product-details">
            <h2>{productItems.name}</h2>
            <div className="rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="price">
              <h4>RS.{productItems.price}.00</h4>
              <button onClick={() => addToCart(productItems)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
      )
      })
    }
    </Slider>
    </>
  )
}

export default FlashCard