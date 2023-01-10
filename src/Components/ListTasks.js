import { useState } from "react"
import { useSelector } from "react-redux"
import CardTask from "./CardTask"

const ListTasks=()=>{
    const [test,setTest] = useState("ALL")
    const tasks = useSelector(state=> state.tasks)
 
    return(
        <div>
            <button onClick={()=>setTest("ALL")}>All</button>
            <button onClick={()=>setTest("DONE")}>Done</button>
            <button onClick={()=>{setTest("UNDONE")}}>Undone</button>
            {/* {
                tasks.map(el=> <CardTask el={el}/>)
            } */}

            {
                test == "ALL" ?
                tasks.map(el=> <CardTask el={el}/>)
                :
                test == "DONE" ?
                tasks.filter(el=> el.isDone == true).map(el=> <CardTask el={el}/>)
                :
                tasks.filter(el=> el.isDone == false).map(el=> <CardTask el={el}/>)
            }
        </div>
    )
}

export default ListTasks