import GLADIATOR from '../images/GLADIATOR.png';
import  "./Loader.css";
const Loader = () =>{

return (
    <div className="load">
  
  <img  className='glad' alt="Gladiador" src={GLADIATOR}/> 
  
  <p className="pload">loading..</p>
 
    </div>
)

}


export default Loader