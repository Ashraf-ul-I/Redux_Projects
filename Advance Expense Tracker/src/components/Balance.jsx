import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import addThousandSeparator from '../utils/thousandSeparator'
const Balance = () => {
  const transAction = useSelector((state) => state.transaction);
  console.log("I am first", transAction);

  // Memoize the balance calculation
  const balance = useMemo(() => {
    return transAction.transactions.reduce((finalAmount, item) => {
      return item.type === 'income'
        ? finalAmount + Number(item.amount)
        : finalAmount - Number(item.amount);
    }, 0);
  }, [transAction.transactions]);

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        {transAction.transactions?.length>0 && (<span>{addThousandSeparator(balance)}</span>)}
      </h3>
    </div>
  );
};

export default Balance;
