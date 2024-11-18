import React from 'react'
import editImage from '../../assets/images/edit.svg';
import deleteImage from '../../assets/images/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteTransactions, editActive } from '../../features/transaction/transactionSlice';
import addThousandSeparator from '../../utils/thousandSeparator';

const SingleTransaction = ({transaction}) => {
    const {name,amount,type,id}=transaction || {}
    const dispatch=useDispatch();
    const handleEdit=()=>{
        dispatch(editActive(transaction))
    }

    const handleDelete=()=>{
        dispatch(deleteTransactions(id))
    }
  return (
  <>
  <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {addThousandSeparator(amount)}</p>
                <button className="link" onClick={handleEdit}>
                    <img
                        className="icon"
                        src={editImage}
                    />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img
                        className="icon"
                        src={deleteImage}
                    />
                </button>
            </div>
        </li>
        </>
  )
}

export default SingleTransaction