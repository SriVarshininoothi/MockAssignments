import React from "react";
import { useState } from "react";

const Counter = () => {

    //store state
    const [count, setCount] = useState(0);

    //handle 
    const handlechangeIncrement = () => {
        setCount(count + 1);
        
        
        

    }

    const handlechangeDecrement = () => {
        setCount(count-1);

    }

    return (

        <div>

          <h2>{count}</h2>
          <button onClick={handlechangeIncrement} style={{color:"white",backgroundColor:"Green",borderRadius:"0px",marginRight:"20px"}}>Increment</button>
        <button onClick={handlechangeDecrement} style={{color:"white",backgroundColor:"red",borderRadius:"0px"}}>Decrement</button>

        </div>
    )


}

export default Counter;