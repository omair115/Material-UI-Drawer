import {SHOW_LOADER,HIDE_LOADER} from '../actions'

export const showLoader = () => {
    return (dispatch)=>{
        dispatch({ type: SHOW_LOADER })
    }
}

export const hideLoader = () => {
    return (dispatch)=>{
        dispatch({ type: HIDE_LOADER })
    }     
}