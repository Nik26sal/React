import {createContext, useContext} from 'react'

export const TodoSchema = createContext({
    Todos:[{
        id:1,
        todo:"massage",
        completed:false
    }],
    addMsg :(todo)=>{},
    deleteMsg:(id)=>{},
    updateMsg:(id,todo)=>{},
    toggleMsg:(id)=>{}
});

export const TodoProvider = TodoSchema.Provider;

export const TodoContext = () => {
    return useContext(TodoSchema)
}