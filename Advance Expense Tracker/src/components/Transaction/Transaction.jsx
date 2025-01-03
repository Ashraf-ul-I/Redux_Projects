import React, { useEffect } from 'react'
import SingleTransaction from './SingleTransaction'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../Error'
import { fetchTransactions } from '../../features/transaction/transactionSlice'
const Transaction = () => {
    const {transactions,isLoading,isError,error}=useSelector(state=>state.transaction);
    const dispatch=useDispatch();
    useEffect(()=>{
     dispatch(fetchTransactions());
    },[dispatch]);
    // decide what to render;
    let content = null;
    if(isLoading) content=<p>Loading...</p>

    if(!isLoading && isError) content=<Error/>;

    if(!isLoading && !isError && transactions?.length>0){
        content=transactions.map(transaction=><SingleTransaction key={transaction.id} transaction={transaction}/>)
    }

    if(!isLoading && !isError && transactions?.length===0){
        content=<p>No transactions Found</p>
    }
  return (
  <>
   <p className="second_heading">Your Transactions:</p>

<div className="conatiner_of_list_of_transactions">
    <ul>
       {content}
    </ul>
</div>
  </>
  )
}

export default Transaction