import React from 'react'

export default function Alert({alert}) {
    return (
        <div>
           <h2 style={{color:"white",margin:"0px",
            borderRadius:"3px",backgroundColor:" rgb(141, 132, 132)",
             textAlign:"center"}}>{alert}</h2> 
        </div>
    )
}
