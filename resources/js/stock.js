import {createSlice} from "@reduxjs/toolkit";
const name = 'stock'
const stock = createSlice({
    name,
    initialState:{
        stock:{
            data: [],
            page: 1,
            last: 1,
            first: 1,
            total: 0
        },
        low:{
            data: [],
            page: 1,
            last: 1,
            first: 1,
            total: 0
        }
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
