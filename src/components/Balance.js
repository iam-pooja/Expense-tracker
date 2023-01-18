import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
 
const {transaction} = useContext(GlobalContext);

const amounts = transaction.map(transac => transac.amount);
const totalAmount = amounts.reduce((acc,item) => (acc += item)).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </>
  )
}

export default Balance
