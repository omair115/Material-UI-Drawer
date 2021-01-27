import {
    HIDE_LOADER,
    SHOW_LOADER,
    VIEW_USER
} from '../actions'

import axios from 'axios'
import {Config} from '../../Config'
let Url = Config


export const viewUser = () =>{
 
    return (dispatch)=>{
        dispatch({type:SHOW_LOADER})
        axios.get(`${Url}/users`)
        .then(res=>{
            dispatch({type:VIEW_USER,payload:res.data})
            dispatch({type:HIDE_LOADER})
          
        })
    }
}

