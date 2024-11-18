import { loaded } from "../action";
import { createAsyncThunk } from '@reduxjs/toolkit';
const fetchTodos=createAsyncThunk('todos/loaded',()=> async( dispatch)=>{

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const todos=await response.json();
    return todos;
})


export default fetchTodos;