import React, { useState } from 'react'
import './Slider.scss';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {

  const [currentSlide,setCurrentSlide]=useState(0);

  const prevSlide=()=>{
    setCurrentSlide(prevState=>{
      return (prevState===0? 200:prevState-100);
    })
  }

  const nextSlide=()=>{
    setCurrentSlide(prevState=>{
      return (prevState===200? 0:prevState+100);
    })
  }

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className='slider'>
      <div className="container" 
      style={{
        transform:`translateX(-${currentSlide}vw)`
      }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}><WestOutlinedIcon/></div>
        <div className="icon" onClick={nextSlide}><EastOutlinedIcon/></div>
      </div>
    </div>
  )
}

export default Slider