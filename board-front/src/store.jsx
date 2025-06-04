import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import  storageSession  from 'redux-persist/lib/storage/session';
import { userRedcer } from './reducer';

const persistConfig = {
    key:'root',
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig,userRedcer);
export const store = configureStore({reducer:{persistedReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
});

