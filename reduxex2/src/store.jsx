import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; //sessionStorage에 저장
// import storage from 'redux-persist/lib/storage/session' //localStorage에 저장
import { rootReducer } from './reducer';

const persistConfig={
    key:'root',
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({reducer:{persistedReducer},
    middleWare:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
});