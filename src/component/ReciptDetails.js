import React from 'react'
import {v4 as uuidv4} from "uuid"
import style from "./recieped.module.css"

const ReciptDetails = ({ingredients}) =>{
    return ingredients.map(ingredient=>{
        return (
           <ul key={uuidv4()} className={style.ulist}>
               <div className={style.list}  >
           <li >{ingredient.text}</li>
           <li > Weight-{ingredient.weight}</li>
           </div>
     
           
           </ul>
        ) 

    })
   
}
export default  ReciptDetails