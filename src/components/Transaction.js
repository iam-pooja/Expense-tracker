import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transac1}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transac1.amount < 0 ? '-' : '+';

  return (
   <li className= {transac1.amount < 0 ? 'minus' : 'plus'}>
        {transac1.text} <span>{sign}${Math.abs(transac1.amount)}</span>
        <button onClick={() => deleteTransaction(transac1.id)} className='delete-btn'>x</button>
    </li>
  )
}

export default Transaction;
