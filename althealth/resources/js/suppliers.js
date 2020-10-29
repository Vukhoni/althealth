import {createSlice} from "@reduxjs/toolkit";
const name = 'suppliers'
const supplier = createSlice({
    name,
    initialState:[],
    reducers:{
        loadSuppliers : (state, action)=>{
            return action.payload;
        },
        addSupplier:(state, action)=>{
            return [...state,action.payload]
        },
        deleteSupplier:
        (state, action)=>{
            return state.map((item)=>{
                if(item.ID == action.payload.ID)
                {
                    return
                }
                else
                {
                    return item;
                }
            });
        },
        editSupplier:(state, action)=>{
            return state.map((item)=>{
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
export const {loadSuppliers, addSupplier,editSupplier, deleteSupplier} = supplier.actions;
export default  supplier.reducer;
