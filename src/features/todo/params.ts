import {createSlice} from "@reduxjs/toolkit";

const initialState = '';
export const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        sendParam: (state, action) => {
            state = action.payload

        },
    }
})
export const {sendParam} = paramsSlice.actions;
export default paramsSlice.reducer;