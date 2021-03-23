import React,{useState} from 'react'

import  style from "./reciept.module.css"
import ReciptDetails from './ReciptDetails'



export default function Recipe({recipe}) {
    const [show, setShow] = useState(false)
    const {label, image,url, ingredients}=  recipe
    return (
        <div className={style.Recipe} >
            <h2 >{label}</h2>
            <img src={image} alt="osas" />
            <a href={url}  target='_blank'
                  rel='noreferrer noopener' >
            URL
            </a>
            <button onClick={()=>setShow (!show)}>ingredients</button>
           {show &&  <ReciptDetails ingredients={ingredients}/>}
           
        </div>
    )
}
