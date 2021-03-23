import React,{useState, useRef,useEffect} from 'react';
import style from "./hero.module.css"

export default function Hero({slide}) {
    const [current, setcurrent] = useState(0)
    const length = slide.length 
    const timeout =useRef(null);


useEffect(() => {
        const nextSlide = ()=>{
            setcurrent(current===length -1? 0 : current +1)
    
        }
        timeout.current = setTimeout(nextSlide, 5000);
        return function(){
           if(timeout.current){
               clearTimeout(timeout.current);
        }
    }
    }, [current, length])
    
    if(!Array.isArray(slide)|| slide.length <= 0){
        return null
    }
    return (
        <div className={style.hero}>
             {slide.map((slide, index)=>{
          return(
              <div key={index} className={style.con}>
                   
                  {index === current && (
                      <div>
                     
                      <img src={slide.images} alt="side"/>
                      </div>
                  )}
                   </div>

          )

             })}
        </div>
    )
}
