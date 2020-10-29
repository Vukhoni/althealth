import {createSlice} from "@reduxjs/toolkit";
const name = 'stock'
const stock = createSlice({
    name,
    initialState:{
        stock:[],
        low:[]
    },
    reducers:{
        loadStock : (state, action)=>{
            state.stock = action.payload;
        },
        loadLowStock: (state,action) => {
            state.low = action.payload;
        }
    }

});
export const {loadStock, loadLowStock} = stock.actions;
export default  stock.reducer;
