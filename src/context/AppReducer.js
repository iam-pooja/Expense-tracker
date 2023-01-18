export default (state, action) => {
    switch(action.type) {
        case 'delete_transaction':
            return{
                ...state,
                transaction: state.transaction.filter(transac => transac.id !== action.payload)
            }
        case 'add_transaction' :
            return{
                ...state,
                transaction: [action.payload ,...state.transaction]
            }
        default :
        return state
    }
}