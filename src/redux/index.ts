import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'

import thunkMiddleware from 'redux-thunk';
import VacationsReducer from './vacations/reducer';

const rootReducer=combineReducers({
    VacationsReducer
});



const persistConfig = {
  key: 'root',
  storage,
}




export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, compose(middleWareEnhancer));

export  const persistor = persistStore(store);
export default store;