import { createSlice } from "@reduxjs/toolkit";
const name = "authentication";
const stock = createSlice({
    name,
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        Logout: (state, action) => {
            state.user = action.payload;
        }
    }
});
export const { login, login } = stock.actions;
export default stock.reducer;
