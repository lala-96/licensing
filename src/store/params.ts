import {createSlice} from "@reduxjs/toolkit";

const initialState: any = 1;
export const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        sendParam: (state: any, action) => {
                state = action.payload;
                return state;
        }


    }

})
export const {sendParam} = paramsSlice.actions;
export default paramsSlice.reducer;