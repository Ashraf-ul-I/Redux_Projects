
const {createStore,applyMiddleware}=require("redux");
const { delayActionMiddleWare, fetchDataMiddleWare } = require("./middleWares");
//initial state
const {fetchTodos}=require('./fetchTodos.js')

const initialState={
   todos: []
};

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "todos/todoAdded":
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        title:action.payload
                    }
                ]
            }
        case "todos/todoLoaded":
            return{
                ...state,
                todos:[
                    ...state.todos,
                    ...action.payload
                ]
            }
    }
}

const store=createStore(todoReducer,applyMiddleware(delayActionMiddleWare,fetchDataMiddleWare));

//subscription
store.subscribe(()=>{
    console.log(store.getState())
});

//dispatch action

// store.dispatch({
//     type:"todos/todoAdded",
//     payload:"Learn Redux from LWs"
// })

store.dispatch(fetchTodos)