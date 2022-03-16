import React from 'react';
import {  Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
//import "./hero.css"
import style from "./hero.module.css"


const Slideshow = ({slide}) => {
 
    return (
      <div className="slide-container">
        <Slide>
         {slide.map((slideImage, index)=> (
           <div className="each-slide" key={index}>
               <div className={style.hoverimg}>
                <img src={slideImage.images}  style={{width: "80vw",height:"40vh"}}alt="hello"/>
            
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow