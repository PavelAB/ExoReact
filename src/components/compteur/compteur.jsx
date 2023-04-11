import { useState } from "react"
import PropTypes from 'prop-types'

const Compteur = ({increment})=>{
const [compt,setCompt]=useState(1)
const compteurAddOne=()=>{
    setCompt(value=>value+increment)
}
const resetCompteur=()=>{
    setCompt(0)
}

return(
    <div>
        <div>
        <p>
            Compteur: {compt}
        </p>
        </div>
        <div>
            <button onClick={compteurAddOne}>+{increment}</button>
            <button onClick={resetCompteur}>Reset</button>
        </div>
    </div>
)
}

Compteur.defaultProps={
    increment:1
}
Compteur.propTypes={
    increment:PropTypes.number
}

export default Compteur