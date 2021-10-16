import * as TabActionTypes from './tabAction';

const initialState={
    isTradeModalVisible: false
}

const tabReducer =(state=initialState, action)=>
{
    switch(action.type)
    {
        case TabActionTypes.SET_TRADE_MODAL_VISIBILITY:
            return{
                ...state,
                isTradeModalVisible: action.payload.isVisible
            }
            default:
            return state
    }
    
}
export default tabReducer;