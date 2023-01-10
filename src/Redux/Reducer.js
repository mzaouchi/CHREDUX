import { ADDTASK, HANDLEDELETE, HANDLEDONE } from "./ActionTypes"

const initialState = {
    tasks :  [
        { text: 'Buy tabbac', id : 0 , isDone:false},        
        {text: 'Buy more tabbac', id:1 , isDone:false},
        {text:'Quit smoking', id:2, isDone:false}
          ]
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {
        case ADDTASK : return {...state, tasks : [...state.tasks,action.payload]}
        case HANDLEDONE : return {...state,tasks : state.tasks.map(el=> el.id == action.payload ? {...el,isDone : !el.isDone}:el)}
        case HANDLEDELETE : return {...state, tasks : state.tasks.filter(el=> el.id != action.payload)}
        default: return state
    }
}

export default Reducer
