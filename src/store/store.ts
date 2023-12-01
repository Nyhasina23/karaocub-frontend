import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from "./reducer/user.reducer";



const userPersistConfig = {
    key: "karaocub_user",
    storage,
};


const userPersistedReducer = persistReducer(userPersistConfig, userReducer);

const rootReducer = combineReducers({
    karaocub_user: userPersistedReducer,

});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)