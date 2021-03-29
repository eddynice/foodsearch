import React,{useState} from 'react'
//import {uuid} from "uuid"
import  style from "./reciept.module.css"
import ReciptDetails from './ReciptDetails'



export default function Recipe({reciepts}) {
    const [show, setShow] = useState(false)
    const {label, image,url,ingredients}=reciepts.recipe;
    return (
        <div className={style.Recipe}   >
            <h2   >{label}</h2>
            <img src={image} alt="osas" style={{ width:'200px'}}  />
            <a href={url}  target='_blank'
                  rel='noopener noreferrer' >
            URL
            </a>
            <button onClick={()=>setShow (!show)} style={{width:"100%", height:"30px" ,color:"white",background:"black"}}>ingredients</button>
           {show &&  <ReciptDetails ingredients={ingredients} />}
           
        </div>
    )
}
