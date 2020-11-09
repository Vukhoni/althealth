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
        },
        addSupplement:(state, action)=>{
            state.stock = [...state.stock,action.payload]
        },
        deleteSupplement:
        (state, action)=>{
            state.stock = state.stock.filter((item)=>{
                return item.ID !== action.payload.ID;
            });
        },
        editSupplement:(state, action)=>{
            state.stock = state.stock.map((item)=>{
                if(item.ID == action.payload.ID)
                {
                    return action.payload;
                }
                else
                {
                    return item;
                }
            });
        }
    }

});
export const {loadStock, loadLowStock, addSupplement, editSupplement,deleteSupplement} = stock.actions;
export default  stock.reducer;
