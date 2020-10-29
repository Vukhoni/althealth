import { createSlice } from "@reduxjs/toolkit";
const name = "authentication";
const authentication = createSlice({
    name,
    initialState: null,
    reducers: {
        login: (state, action) => {
            return action.payload;
        },
        logout: (state, action) => {
            return null;
        },
        register: (state,action) =>{
            return action.payload;
        }
    }
});
export const { login, logout, register } = authentication.actions;
export default authentication.reducer;
