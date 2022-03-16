import React,{useState} from "react"
import  style from "./App.module.css"
import Alert from "./component/Alert"
import Axios from "axios"
import { v4 as uuidv4 }from "uuid"
import Recipe from "./component/Recipe"
import {SlideData} from "./data/Info"
import Hero2 from "./component/Hero2"
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import Footer from "react-footer-comp"



const override = css`
display: block;
margin: 0 auto;
border-color: blue;
speedMultiplier:0.1;
width:60px;
`;

export default function App() {
  const [query, setQuery] = useState("")
  const [reciept, setRecipt] = useState([])
  const [alert, setAlert] = useState("")


  const [isLoading, setLoading] = useState(false)
  




    const YOUR_APP_KEY="3225a92514b155628c2ecd21c3f46313"
    const YOUR_APP_ID="99fdb152"
    const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    //https://api.edamam.com/search?q=chicken&app_id=${4217f819}&app_key=${ac23f2ffd7b728c4eb1d8ffa8fb5b997	}
    const getData = async () =>{
      setLoading(true)
      if(query !== ""){
        const result =await Axios.get(url)
       
       if(!result.data.more){
        return setAlert("no food with such name")
       }
        setRecipt(result.data.hits)
        setLoading(false)
        console.log(result)
     
     setAlert("")
     setQuery("");
    }else{
      setAlert("please fill the form")
      setLoading(false)
    }
    }
  

 

    const  Onsubmit=(e)=>{
      e.preventDefault()
      getData();
  }

const  onClhange = (e)=>{
   setQuery(e.target.value)
  }

    return (
        <div className={style.app}>
           <a href="/#"><h1 > <b>TRU-FOOD</b> </h1></a>
       
        <Hero2 slide={SlideData}/>
       
           
            <form onSubmit={Onsubmit}>
            {alert !== "" &&   <Alert alert={alert} />}
                <input type="text" autoComplete="off"
                 onChange={onClhange} value={query}
                 placeholder="search food"/>
                   
                
                <input  type="submit" className={style.bt}  value="search"/>

            </form>
          
          
            <div className={style.gridContainer}>
              {isLoading ?(<RingLoader css={override} size={90}/>):(reciept.map(reciepts=>(
               <Recipe key={uuidv4()} reciepts={reciepts} />
              )

              ))
              
              }
            </div>
            <Footer
    copyrightIcon
    years={[2021]}
    height={30}
    bgColor={"#a09bab"}
    copyrightText
    copyrightIconStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
    copyrightTextStyle={{ color: "white", fontSize: 20, marginRight: 10 }}
    textStyle={{ color: "yellow", fontSize: 16, marginRight: 10 }}
    text={"All rights reserved."}
  />
           
            
        </div>
    )
}


