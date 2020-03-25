import {createSlice} from "@reduxjs/toolkit";
const name = 'birthdays'
const birthdays = createSlice({
    name,
    initialState:[],
    reducers:{
        loadbirthdays : (birthdays, action)=>{
            return action.payload;
        }
    }

});
export const {loadbirthdays} = birthdays.actions;
export default  birthdays.reducer;
