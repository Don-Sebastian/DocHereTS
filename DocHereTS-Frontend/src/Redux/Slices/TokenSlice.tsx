import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jwtUser: '',
    jwtDoc: '',
    jwtAdmin: '',
}

const tokenSlice = createSlice({
    name: 'jwtToken',
    initialState,
    reducers: {
        updateJwtToken: (state, action) => {
            state.jwtUser = action.payload.jwtUser;
            state.jwtDoc = action.payload.jwtDoc;
            state.jwtAdmin = action.payload.jwtAdmin;
        },
        clearJwtToken: (state, action) => {
            state.jwtUser = '';
                state.jwtDoc = '';
                state.jwtAdmin = '';
        }
    }
})

export const { updateJwtToken, clearJwtToken } = tokenSlice.actions;

export default tokenSlice.reducer;

