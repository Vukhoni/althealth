import {createSlice} from "@reduxjs/toolkit";
const name = 'invoicing'
const invoicing = createSlice({
    name,
    initialState:{
        invoices:{
            data: [],
            page: 1,
            last: 1,
            first: 1,
            total: 0
        },
        unpaid:{
            data: [],
            page: 1,
            last: 1,
            first: 1,
            total: 0
        }
    },
    reducers:{
        loadunpaid : (state, action)=>{
            state.unpaid = action.payload;
        },
        loadinvoices: (invoices,action) => {
            state.invoices = action.payload;
        }
    }

});
export const {loadunpaid, loadinvoices} = invoicing.actions;
export default  invoicing.reducer;
