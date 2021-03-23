import React from 'react'

const ReciptDetails = ({ingredients}) =>{
    return ingredients.map(ingredient=>{
        return (
           <ul key={ingredient.id} className="indredient-list">
           <li className="list">{ingredient.text}</li>
           <li className="weight"> Weight-{ingredient.weight}</li>
     
           
           </ul>
        ) 

    })
   
}
export default   ReciptDetails