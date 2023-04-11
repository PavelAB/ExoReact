import { useState } from "react"
import { useId } from "react"
import style from './calculator.module.css'

const Calculator =()=>{
    const id = useId
    const [resultOperation,seResultOperation]=useState('')
    const [choice,setChoice]=useState('+')
    const [valueNumber1,setValueNumber1]=useState('')
    const [valueNumber2,setValueNumber2]=useState('')

    const handleCalculatorSubmit=(e)=>{
        e.preventDefault();
        let result
        let value1
        let value2
        try {
             value1=parseFloat(valueNumber1.replace(',','.'))
             value2=parseFloat(valueNumber2.replace(',','.'))
        } catch (error) {
            return
        }



        if (isNaN(value1) || isNaN(value2)) {
            result=''
        }

        else if(choice==='+'){
            result=parseFloat(value1)+parseFloat(value2)
        }
        else if(choice==='-'){
            result=parseFloat(value1)-parseFloat(value2)
        }
        else if(choice==='*'){
            result=parseFloat(value1)*parseFloat(value2)
        }
        else if(choice==='/' && valueNumber2!=0){  
            result=parseFloat(value1)/parseFloat(value2)
        }
        else {
            if(valueNumber2==0)
                result='Impossible'
            else
                result='Pas de reponse'
        }
        seResultOperation(result)
    }

    return(
        <form className={style['temp-convert']} onSubmit={handleCalculatorSubmit}>
            <div>
                <label htmlFor={id+"number1"}>First Number</label>
                <input type="text" id={id+"number1"}
                        value={valueNumber1}
                        onChange={e=>setValueNumber1(e.target.value)
                        } />
            </div>
            <div>
                <label htmlFor={id+"operation"}>Operation</label>
                <select id={id+"operation"}
                        value={choice}
                        onChange={e=>setChoice(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>

            </div>
            <div>
                <label htmlFor={id+"number2"}>Second Number</label>
                <input type="text" id={id+"number2"}
                        value={valueNumber2}
                        onChange={e=>setValueNumber2(e.target.value)} />
            </div>
            <div>
                <button type="submit">Calculer</button>
                <input type="text"  value={resultOperation} readOnly />
            </div>
        </form>
    )
}
export default Calculator