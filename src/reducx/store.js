import {redux,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const itialState = {};
const middleware = [thunk];
export const store = createStore(rootReducer,itialState,composeWithDevTools(applyMiddleware(...middleware)));

//in store i create my store
//i import the rootReducer :which in it i combine all the reducers (categoryReducer,productReducer,authReducer)
//i import the thunk middleware to handle the async actions as not appear error while using async await
//i import the composeWithDevTools to use the redux dev tools extension and wrap the applyMiddleware with it to be able to see actions ,state and reducers in the browser
//finally i create the store with the rootReducer ,initialState and the middleware
