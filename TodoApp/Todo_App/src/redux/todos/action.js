import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes"

export const added=(todotext)=>{
    return {
        type:ADDED,
        payload:todotext
    }
}

export const toggled=(todoId)=>{
    return {
        type:TOGGLED,
        payload:todoId
    }
}

export const loaded=(todos)=>{
    return {
        type:LOADED,
        payload:todos
        
    }
}

export const colorSelected=(todoId,color)=>{
    return {
        type:COLORSELECTED,
        payload:{
            todoId,color
        }
    }
}

export const deleted=(todoId)=>{
    return {
        type:DELETED,
        payload:todoId
    }
}


export const allCompleted=()=>{
    return {
        type:ALLCOMPLETED,
    }
}

export const clearCompleted=()=>{
    return {
        type:CLEARCOMPLETED,
    }
}

