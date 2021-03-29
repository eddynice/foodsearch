import React,{useState} from "react"
import  style from "./App.module.css"
import Alert from "./component/Alert"
import Axios from "axios"
import { v4 as uuidv4 }from "uuid"
import Recipe from "./component/Recipe"
import {SlideData} from "./data/Info"
import Hero from "./component/Hero"



export default function App() {
  const [query, setQuery] = useState("")
  const [reciept, setRecipt] = useState([])
  const [alert, setAlert] = useState("")

    const YOUR_APP_KEY="3225a92514b155628c2ecd21c3f46313"
    const YOUR_APP_ID="99fdb152"
    const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    //https://api.edamam.com/search?q=chicken&app_id=${4217f819}&app_key=${ac23f2ffd7b728c4eb1d8ffa8fb5b997	}
    const getData = async () =>{
      if(query !== ""){
        const result =await Axios.get(url)
       
       if(!result.data.more){
        return setAlert("no food with such name")
       }
        setRecipt(result.data.hits)
     
     setAlert("")
     setQuery("");
    }else{
      setAlert("please fill the form")
    }
    }
  

 
   // useEffect(() => {
    //  setchech([...info]);
   // }, []);

    const  Onsubmit=(e)=>{
      e.preventDefault()
      getData();
  }

const  onClhange = (e)=>{
   setQuery(e.target.value)
  }

    return (
        <div className={style.app}>
           <h1 > TRU-FOOD SEARCHING APP</h1>
        <Hero slide={SlideData}/>
           
            <form onSubmit={Onsubmit}>
            {alert !== "" &&   <Alert alert={alert} />}
                <input type="text" autoComplete="off"
                 onChange={onClhange} value={query}
                 placeholder="search food"/>

                
                <input  type="submit"  value="search"/>

            </form>
            <div className={style.gridContainer}>
              {reciept !== [] && reciept.map(reciepts=>(
               <Recipe key={uuidv4()} reciepts={reciepts} 
                />
              )

              )}
            </div>
            
        </div>
    )
}


