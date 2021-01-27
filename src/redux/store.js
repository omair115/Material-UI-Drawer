import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 

export const configureStore = () => {

    const middlewares = [thunk]

    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(reducers , composedEnhancer)

    return store;
}


