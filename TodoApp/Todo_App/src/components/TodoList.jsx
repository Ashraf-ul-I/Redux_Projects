import Todo from "./Todo"
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import fetchTodos from "../redux/todos/thunk/fetchTodos";
const TodoList = () => {
  const todos=useSelector((state)=>state.todos)
  const filters=useSelector((state)=>state.filters)
  const dispatch=useDispatch()
  useEffect(() => {
    console.log("Fetching todos...");
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    console.log("Todos fetched:", todos); // Log fetched todos
  }, [todos]); // Watch for changes in todos

  
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">     
                   {todos

                   .filter(todo=>{
                    const {status}=filters;
                    switch(status){
                      case 'Complete':
                        return todo.completed;
                      case 'Incomplete':
                          return !todo.completed;
                      default:
                        return true
                    }
                   })

                   .filter(todo=>{
                    const {colors}=filters;
                    if(colors.length>0){
                       return colors.includes(todo?.color);
                    }
                    return true;
                   })

                   .map((todo)=>
                      (<Todo todo={todo} key={todo.id}/>) 
                   )}
    </div>
  )
}

export default TodoList