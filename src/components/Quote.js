//Style
import './Quote.css';

//Axios - Work with api
import axios from 'axios';

//Hooks
import React, {useEffect, useState} from 'react'

//Loader component
import Loader from './Loader';


//API URL
const url = 'https://Api.fefavero.repl.co';

//Component Function
const Quote = ( ) => {
   
   //API State 
   const [ quotes , setQuotes] = useState([])
   ////Loading State
   const [removeLoading, setRemoveLoading] = useState(false)
   
   // API UseEffect
   useEffect(() =>{
     
      axios.get(url).then((response)=>{    //Get data from API with Axios
      
         
          const n = Math.floor(Math.random() * response.data.length) // Select a random object from API Data
          
      
        //  console.log( response.data[n]);
         
          
        setQuotes(response.data[n]);    //Set quotes state with the random object
         //console.log(response.data);
         
       setRemoveLoading(true);    //Change the loading state after receive API data. 
         
       
      });
      
      },[])

   

      if(!quotes) return null; 
      




return(
   
   <div className='quote'>
    <div className='content'>
    
    
 <div className='paragrafo'>
 <p >{quotes.quote}</p>    {/*receive quote from API object*/}
 </div>
 
 
 <p className='author'> {quotes.ruthor}</p>  {/*receive "ruthor" from API object*/}
  
  <div className='img'>   
 <img   src={quotes.img_url} />  {/*receive img from API objecto*/}
 </div>
 {!removeLoading && <Loader/>} {/* Loading start. Will change after receive API data*/}
    
    


    </div> 
   </div>
)

}


export default Quote;

