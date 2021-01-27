import {HIDE_LOADER, SHOW_LOADER, VIEW_USER} from '../actions';

const initialState={
    viewUser:[],
    loading:false
}

const reducer=(state=initialState,action)=>
{

  switch(action.type)
  {

    case VIEW_USER:
        {
         
          return {
            ...state,
            viewUser: action.payload
        }
    
        }
        case SHOW_LOADER:
          {
           
            return {
              ...state,
                  loading: true
          }
        }
          case HIDE_LOADER:
            {
             
              return {
                ...state,
                    loading: false
            }
      
          }
    
   default:
   return state
   }
 
}
export default reducer;