export const SET_TRADE_MODAL_VISIBILITY='SET_TRADE_MODAL_VISIBILITY';

export const SetTradeModalVisibilitySuccess=(isVisible)=>({
    type: SET_TRADE_MODAL_VISIBILITY,
    payload: {isVisible}

})
export function SetTradeModalVisibility(isVisible)
{
    return dispatch=>{
        dispatch(SetTradeModalVisibilitySuccess(isVisible))
    }
}