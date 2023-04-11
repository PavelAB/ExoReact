const ToDoListe =({IdTask,Task,Description,Priority,Check,onDeleteObject})=>(
    

    <div>
        <h2>{Task}</h2>
        <div>
             <p>{Description}</p>
        </div>
        <div>
            <span>{Priority}</span>
        </div>
        <div>
            <button onClick={()=>onDeleteObject(IdTask)}>Supprimer</button>
            <button>Fait</button>
        </div>
    </div>
)


export default ToDoListe