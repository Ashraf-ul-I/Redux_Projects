import { configureStore } from "@reduxjs/toolkit";
import transactonReducer from '../features/transaction/transactionSlice';
const store=configureStore({
    reducer:{
        transaction:transactonReducer
    }

})

export default store;