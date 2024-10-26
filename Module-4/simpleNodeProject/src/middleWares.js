const delayActionMiddleWare=(store)=>(next)=>(action)=>{
    if(action.type==='todos/todoAdded'){
      console.log('i am delaying');
      setTimeout(()=>{
        next(action);
      },2000)

      return ;
    }
    return next(action)
}

const fetchDataMiddleWare=(store)=>(next)=>async (action)=>{
    if(typeof action === 'function'){
        
        return action(store.dispatch,store.getState);

    }

    return next(action)
}

module.exports={
    delayActionMiddleWare,
    fetchDataMiddleWare
}