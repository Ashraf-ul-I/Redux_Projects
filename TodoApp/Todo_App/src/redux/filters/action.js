import { COLORSCHANGED, STATUSCHANGED } from "./actionType"

export const colorChanged=(color,changeType)=>{
    return{
        type:COLORSCHANGED,
        payload:{
            color,changeType
        }
    }
}

export const filterStatusChanged=(status)=>{
    return{
        type:STATUSCHANGED,
        payload:{
            status
        }
    }
}