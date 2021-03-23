import React from 'react'

export default function Alert({alert}) {
    return (
        <div>
           <h2 style={{color:"white",margin:"0px",
            background:"red",borderRadius:"3px",
             textAlign:"center"}}>{alert}</h2> 
        </div>
    )
}
