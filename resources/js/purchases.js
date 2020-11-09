import {createSlice} from "@reduxjs/toolkit";
const name = 'purchases'
const purchases = createSlice({
    name,
    initialState:{
        monthly:[]
    },
    reducers:{
        loadMonthly : (state, action)=>{
            console.log("reducer called",action.payload);
            state.monthly = action.payload;
        }
    }

});
export const {loadMonthly} = purchases.actions;
export default  purchases.reducer;
