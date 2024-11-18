// Assuming all components are working individually
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
// const fetchTodos = require('./fetchTodos.js'); // Ensure this points to your correct file

const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoLoaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload]
            };
        default:
            return state;
    }
};

const store = createStore(todoReducer, applyMiddleware(thunk));


// Subscription for testing output
store.subscribe(() => {
    console.log("Updated State:", store.getState());
});

const fetchData = () => async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    dispatch({ type: "DATA_LOADED", payload: [data] });
};


store.dispatch(fetchData());
;
