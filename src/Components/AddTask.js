import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask=()=>{
    const [title,setTitle] = useState("")
    const dispatch = useDispatch()

    return(
        <div>
            <input onChange={(e)=>setTitle(e.target.value)} type='text'/>
            <button onClick={()=>dispatch(addTask({text: title, id : Math.random() , isDone:false}))}>Add</button>
        </div>
    )
}

export default AddTask