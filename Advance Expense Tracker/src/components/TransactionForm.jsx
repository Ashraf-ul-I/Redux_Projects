import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTransactions, editTransactions } from '../features/transaction/transactionSlice';
import Error from './Error';
const TransactionForm = () => {

    const [name,setName]=useState('');
    const [type,setType]=useState('');
    const [amount,setAmount]=useState('');
    const [editMode,setEditMode]=useState(false);
    const dispatch=useDispatch();
    const {isError,isLoading,error}=useSelector(state=>state.transaction)
    const {editing}=useSelector(state=>state.transaction);
    
    const resetForm=()=>{
        setName('');
        setType('');
        setAmount('')
    }

    useEffect(()=>{
       const {id,name,amount,type}=editing || {};

       if(id){
          setEditMode(true)
          setName(name);
        setType(type);
        setAmount(amount)
       }else{
        setEditMode(false)
          resetForm();
       }
    },[editing])

    const handleCreate=(e)=>{
        e.preventDefault();
        dispatch(createTransactions({
            name,
            type,
            amount:Number(amount)
        }))
        resetForm();
    }
    
    const cancelEditMode=()=>{
        resetForm()
        setEditMode(false);
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(editTransactions({
            id:editing?.id,
            data:{
                name:name,
                type:type,
                amount:amount
                
            }
        }));
        setEditMode(false);
        resetForm();
    }
    
  return (
    <div className="form">
                        <h3>Add new transaction</h3>
               <form onSubmit={editMode? handleUpdate : handleCreate}>
                        <div className="form-group">
                            <label htmlFor="transaction_name">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter title"
                                value={name}
                                onChange={e=>setName(e.target.value)} //it will show the typing word otherwise it will not
                            />
                        </div>

                        <div className="form-group radio">
                            <label htmlFor="transaction_type">Type</label>
                            <div className="radio_group">
                                <input
                                    type="radio"
                                    value="income"
                                    required
                                    name="type"
                                    checked={type ==="income"}
                                    onChange={e=>setType('income')}
                                />
                                <label htmlFor="transaction_type">Income</label>
                            </div>
                            <div className="radio_group">
                                <input
                                    type="radio"
                                    value="expense"
                                    name="type"
                                    placeholder="Expense"
                                    checked={type ==="expense"}
                                    onChange={e=>setType('expense')}
                                />
                                <label htmlFor="transaction_type">Expense</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="transaction_amount">Amount</label>
                            <input
                                type="number"
                                required
                                placeholder="300"
                                name="amount"
                                value={amount}
                                onChange={e=>setAmount(e.target.value)} 
                            />
                        </div>

                        <button className="btn" type='submit' disabled={isLoading} >{editMode?"Update Transaction":"Add Transaction"}</button>
                        {!isLoading && isError && (
                           <p style={{
                               color: '#e63946',
                               backgroundColor: '#ffe6e6',
                               padding: '10px',
                               border: '1px solid #e63946',
                               borderRadius: '5px',
                               fontWeight: 'bold',
                               textAlign: 'center',
                               margin: '10px 0'
                           }}>
                               There was an error processing your request.
                           </p>
                        )}

                       </form>
                       {editMode && (<button style={{
                               color: 'white',
                               backgroundColor: 'red',
                               padding: '12px',
                               border: '1px solid #e63946',
                               borderRadius: '5px',
                               fontWeight: 'bold',
                               textAlign: 'center',
                               margin: '1px 0',
                               transition:' background-color 0.3s ease',
                               cursor:'pointer'
                           }} onClick={cancelEditMode}>Cancel Edit</button>)}

                    </div>
  )
}

export default TransactionForm