import React,{useState} from "react"
import  style from "./App.module.css"
import Alert from "./component/Alert"
import Axios from "axios"
import  uid from "uuid"
import Recipe from "./component/Recipe"
import {SlideData} from "./data/Info"
import Hero from "./component/Hero"



export default function App() {
  const [query, setQuery] = useState("")
  const [reciept, setRecipt] = useState([])
  const [alert, setAlert] = useState("")

    const APP_KEY="ac23f2ffd7b728c4eb1d8ffa8fb5b997	"
    const APP_id="4217f819"
    const url=`https://api.edamam.com/search?q=chicken&app_id=${APP_id}&app_key=${APP_KEY}`

    const getData = async () =>{
      if(query !== ""){
        const result =await Axios.get(url)
        console.log(result)
       if(!result.data){
        return setAlert("no food with such name")
       }
        setRecipt(result)
     console.log(result)
     setAlert()
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
              {reciept !== [] && reciept.map(reciept=>(
               <Recipe key={uid}
                reciept={reciept} 
                />
              )

              )}
            </div>
            
        </div>
    )
}


