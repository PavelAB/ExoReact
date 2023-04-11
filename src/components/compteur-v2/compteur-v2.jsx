import { useState } from "react"
import PropTypes from 'prop-types'
import { useEffect } from "react"

const CompteurV2 = ({increment})=>{
const [compt,setCompt]=useState({date:new Date()})
const [sec,getSec]=useState(0)
const [isDisable,setDesable]=useState(true)
let myInterval=setInterval



const stopTimer=()=>{
    clearInterval(myInterval)
    setCompt(0)
  }
const compteurAddOne=()=>{
    console.log(compt);
    setCompt({date:new Date()})
}

useEffect(()=>{
    if(compt)
        myInterval=setInterval(compteurAddOne,200);
    return ()=>clearInterval(myInterval)
},[compt])




return(
    <div>
        <div>
        <p>
            {compt.date.toLocaleTimeString()}
        </p>
        </div>
        <div>
            {/* <button onClick={()=>setDesable(!isDisable)}>Let'sGo / Stop</button>
            <button onClick={stopTimer}>Reset</button> */}
            
        </div>
    </div>
)
}

CompteurV2.defaultProps={
    increment:1
}
CompteurV2.propTypes={
    increment:PropTypes.number
}

export default CompteurV2