import React, { useState } from 'react';
import ComponentB from './ComponentB';

function ComponentA() {
    // State Constructor
    const  [ count, setCount ] = useState(0);
    const  [ button, setButton ] = useState(false);

      // Functions
      const Increment = () => {
        if(count < 10 ){
          setCount(count + 1)
        }
      }
      const Decrement = () => {
        if(count > -10 ){
          setCount(count - 1) 
        }
      }
      const handleDisable = () => {setButton(!button)}


  return (
    <>
      <h1>Simple React Counter</h1>
         <h2>{count}</h2>
             <div>
                {!button ?
                    <>
                        <button className='btn'  onClick={Decrement}>-</button>
                        <button className='btn' onClick={Increment}>+</button>
                     </>
                    :
                    <>
                    <br></br>
                    </>
                }
                <hr></hr>
                <button className='btn' onClick={handleDisable}>{button ? 'Enable' : 'Disable'}</button>
              </div>
            <ComponentB data={count}/>
    </>
  )
}

export default ComponentA