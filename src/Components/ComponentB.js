import React, { useEffect } from 'react'

 function ComponentB(props) {

   

    const printLog = (props) => console.log(props);

    useEffect(() => {

        printLog(props);

    },[props]);

  return (
    <>  
    </>
  )
}

export default ComponentB
