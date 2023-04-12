import {useState} from 'react'

import Popup from 'reactjs-popup'

const Home =()=>{
    const [val1,setVal1]=useState('')
    const [val2,setVal2]=useState('')
     
    

    const changeVal1=(e)=>{
        setVal1(e.target.value)
    }

    const changeVal2=(e)=>{
        setVal2(e.target.value)
    }

    

   

        

    

    return(
        <>
  m
            <label htmlFor='val1'>val1:</label>
            <input type='text' id='val1' onChange={changeVal1} value={val1}/>
            <label htmlFor='val2'>val2:</label>
            <input id='val2' type='text' onChange={changeVal2} value={val2}/>
           
       <Popup modal trigger={<button type='button'>open Popup</button>}>
        {((close)=><><p>val1:{val1}</p>
        <p>val2:{val2}</p>
        <button onClick={()=>close()} type='button'>close Popup</button>
        </>)}
    </Popup>
  
    </>  )
}

export default Home