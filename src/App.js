
//Components
import Quote from './components/Quote';
import Background from './components/Button';
//Style
import './App.css';
//Hooks
import { useState } from 'react';

//BackgroundImg
import background from './images/background.png'




//App stages data 
const stages = [
  {id: 1 , name:"initial" },
  {id:2, name:"quote"},
];




//Component Function
function App() {
  //App state with a default start value.
  const[appStage, setAppStage] = useState(stages[0].name);


//Function for change the app state/stage 
  const getQuote = () => {
    setAppStage(stages[1].name)
  }


  return (
    <div className="App">
  <h1>BE STOIC</h1>
<p>EVERYDAY A STOIC MESSAGE FOR YOU.</p>


{appStage === 'initial' && <> <Background  getQuote={getQuote} /> </>} {/* Initial Stage and components*/}

{appStage === 'quote' && <> <Quote />  </>}  {/*Final stage and compnents*/}

<img className='background' alt="Heart" src={background}/>  {/*Backgroundimg */}
    

    </div>
  );
}

export default App;
