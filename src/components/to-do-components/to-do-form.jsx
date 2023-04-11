import { useId } from "react"
import { priorityEnum } from "../../enums/priority.enum"
import { useState } from "react"

const ToDoForm =(props)=>{ //pq on a besoin des props?
    const id = useId()

    //const [idTask,setIdTask] = useState('')
    const [nameTask,setNameTask] = useState ('')
    const [description,setDescription] = useState('')
    const [priority,setPriority] = useState(priorityEnum.Basse)
    const [check,setCheck] = useState(false)

    const handleTaskInfo =(e)=>{
        e.preventDefault()
        console.log(e.target);
        const taskInformation = {
            IdTask:randomString(5),
            Task:nameTask,
            Description:description,
            Priority:priority,
            Check:check
        }
        console.log(taskInformation);
        props.onChange(taskInformation)
    }
    const randomString=(length)=>{
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result=''
        for(let i = 0; i<length;i++ ){
          result += alphabet.charAt(Math.floor(Math.random()*alphabet.length))
        }
        return result
      }

    return(
        <form onSubmit={handleTaskInfo}>
            <div>
                <label htmlFor={id+"name"}>Tache : </label>
                <input type="text" id={id+"name"} value={nameTask} onChange={e=>setNameTask(e.target.value)}/>
            </div>

            <div>
                <label htmlFor={id+"descriptions"}>Descriptions : </label>
                <textarea  id={id+"descriptions"} cols="10" rows="3"
                            value={description} onChange={e=>setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label htmlFor={id+"priority"}>Priorite : </label>
                <select id={id+"priority"}
                        value={priority}
                        onChange={e=>setPriority(e.target.value)}>
                    <option value={priorityEnum.Basse}>Basse</option>
                    <option value={priorityEnum.Normal}>Normal</option>
                    <option value={priorityEnum.Urgent}>Urgent</option>
                </select>
            </div>
            <div>
                <label htmlFor={id+"do"}>Termine ?</label>
                <input type="checkbox" id={id+"do"}
                        checked={check} onChange={e=>setCheck(e.target.checked)}/>
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>
        </form>
    )
}
export default ToDoForm