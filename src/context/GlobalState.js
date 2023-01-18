import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
    transaction : [
        {id: 1, text: 'pen', amount: -20},
        {id: 2, text: 'pencil', amount: 500},
        {id: 3, text: 'eraser', amount: -60},
        {id: 4, text: 'note', amount: 700}
    ]
}


//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransaction(id) {
        dispatch({
            type: 'delete_transaction',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'add_transaction',
            payload: transaction
        });
    }

     return <GlobalContext.Provider value={{transaction : state.transaction, deleteTransaction, addTransaction}}>
       {children}
      </GlobalContext.Provider>
    
}