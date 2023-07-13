import {configureStore} from "@reduxjs/toolkit";
import paramsReducer from './params'

export const store = configureStore(
    {
        reducer: {
            params:paramsReducer,
        }
    }
);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch