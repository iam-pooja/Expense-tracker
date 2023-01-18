import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

const {transaction} = useContext(GlobalContext);  

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transaction.map(transac => (<Transaction key={transac.id} transac1={transac} />))}
      </ul>
    </>
  )
}

export default TransactionList
