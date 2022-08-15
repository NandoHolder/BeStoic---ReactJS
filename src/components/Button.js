

import './Button.css'

const Button = ({getQuote}) => {
    return(
        <div className="back">
        
              <button className='button' onClick={getQuote}>GET YOUR DAILY STOIC  QUOTE</button>
        </div>
    )
}


export default Button;