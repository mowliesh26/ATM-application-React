  
import { thunk } from 'redux-thunk';
import { Reducerfunction } from '../Reducer/Reducer';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer,persistStore } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'mouli',
    storage,
    
}
 

    const persistreducer =persistReducer(persistConfig,Reducerfunction)
    export const store =createStore(persistreducer,applyMiddleware(thunk))
    export const persistor=persistStore(store)