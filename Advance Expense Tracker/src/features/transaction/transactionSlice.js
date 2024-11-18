import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransaction, getTransactions,apiEditTransaction,apiDeleteTransactions } from "./transactionApi"

const initialState={
    transactions:[],
    isLoading:false,
    isError:false,
    error:"",
    editing:{}
}

export const fetchTransactions=createAsyncThunk('transaction/fetchTransactions',async ()=>{
    const transactions=await getTransactions();
    return transactions;

})

export const createTransactions=createAsyncThunk('transaction/createTransactions',async (data)=>{
    const transactions=await addTransaction(data);
    return transactions;

});

export const editTransactions = createAsyncThunk('transaction/editTransactions', async ({ id, data }) => {
    const transactions = await apiEditTransaction(id, data); 
    return transactions;
});

export const deleteTransactions=createAsyncThunk('transaction/deleteTransactions',async (id)=>{
    const transactions=await apiDeleteTransactions(id);
    return transactions;
});

const transactionSlice=createSlice({
    name:'transaction',
    initialState,
    reducers:{
      editActive:(state,action)=>{

         state.editing=action.payload
      },
      editInActive:(state,action)=>{

        state.editing={}
     }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTransactions.pending,(state,action)=>{
            state.isError=false;
            state.isLoading=true;
        })
        .addCase(fetchTransactions.fulfilled,(state,action)=>{
            state.isError=false,
            state.isLoading=false;
            state.transactions=action.payload;
        })

        .addCase(fetchTransactions.rejected,(state,action)=>{
            state.isError=true,
            state.isLoading=false,
            state.transactions=[],
            state.error=action.error.message
        })

        //addTransaction 

        .addCase(createTransactions.pending,(state,action)=>{
            state.isError=false;
            state.isLoading=true;
        })
        .addCase(createTransactions.fulfilled,(state,action)=>{
            state.isError=false,
            state.isLoading=false;
            state.transactions.push(action.payload)
        })

        .addCase(createTransactions.rejected,(state,action)=>{
            state.isError=true,
            state.isLoading=false,
            state.error=action.error?.message
        })

        //edit transaction

        .addCase(editTransactions.pending,(state,action)=>{
            state.isLoading=true;
            state.isError=false;
            
        })
        .addCase(editTransactions.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            const indexToUpdate=state.transactions.findIndex(t=>t.id ===action.payload.id);//find the id 
            state.transactions[indexToUpdate]=action.payload;//then on this ids data it will change with the new payload
        })

        .addCase(editTransactions.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.error=action.error?.message
        })

        //remove transaction

        .addCase(deleteTransactions.pending,(state,action)=>{
            state.isError=false;
            state.isLoading=true;
        })
        .addCase(deleteTransactions.fulfilled,(state,action)=>{
            state.isError=false,
            state.isLoading=false;
            state.transactions=state.transactions.filter(t=>t.id !==action.meta.arg); //because we didnot find its in payload because the asyncthunk got the id for fetch the data but after fetch its used the id for the fetching data and then it didnot sent the id in payload its send the data in meta and in arg so we have to do this.
        })

        .addCase(deleteTransactions.rejected,(state,action)=>{
            state.isError=true,
            state.isLoading=false,
            state.error=action.error?.message
        })
    }
})

export default transactionSlice.reducer;
export const {editActive,editInActive}=transactionSlice.actions;