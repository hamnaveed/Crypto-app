import * as MarketActions from './MarketActions';

const initialState = {
    myHoldings: [],
    coins: [],
    error: null,
    loading: false

}


const MarketReducer=(state= initialState, action)=>{

    switch(action.type){
        case MarketActions.GET_HOLDINGS_BEGIN:
            return{
                ...state,
                loading: true
            }
        case MarketActions.GET_HOLDINGS_SUCCESS:
            return{
                ...state,
                myHoldings: action.payload.myHoldings
            }
        case MarketActions.GET_HOLDINGS_FAILURE:
            return{
                ...state,
                error: action.payload.error
            }   
        
        case MarketActions.GET_COIN_MARKET_BEGIN:
            return{
                ...state,
                loading:true
            }
        case MarketActions.GET_COIN_MARKET_SUCCESS:
            return{
                ...state,
                coins: action.payload.coins
            }

        case MarketActions.GET_COIN_MARKET_FAILURE:
            return{
                ...state,
                error:action.payload.error
            }
        
        default:
            return state
    }

}

export default MarketReducer