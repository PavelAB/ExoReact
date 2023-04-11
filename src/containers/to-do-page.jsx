import { useState } from "react"
import ToDoForm from "../components/to-do-components/to-do-form"
import ToDoListe from "../components/to-do-components/to-do-liste"
import ToDoOptions from "../components/to-do-components/to-do-options"

const ToDoPage =()=>{
    


    const [Tasks,setTasks] = useState([])

    const handleInformationAboutNewTask=(value)=>{

        setTasks([...Tasks,value])



    }

    const handleDeleteTask=(value)=>{
        setTasks(Tasks.filter((i)=>i.IdTask !== value))
    }


    return(
        <div>
            <div>
                <ToDoForm onChange={handleInformationAboutNewTask}/>
            </div>
            <div>{
                    Tasks.map((iter) =>(
                             <ToDoListe key={iter.IdTask} onDeleteObject={handleDeleteTask} {...iter}/>                            
                             ))
                            }
            </div>
        </div>
    )
}
export default ToDoPage