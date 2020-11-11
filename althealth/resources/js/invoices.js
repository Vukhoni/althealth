import {createSlice} from "@reduxjs/toolkit";
const name = 'invoicing'
const invoicing = createSlice({
    name,
    initialState:{
        invoices:[],
        unpaid:[],
        cart:[],
        invoiceitems: [],
    },
    reducers:{
        loadunpaid : (state, action)=>{
            state.unpaid = action.payload;
        },
        loadinvoices: (state,action) => {
            state.invoices = action.payload;
        },
        loaditems: (state, action)=>{
            state.invoiceitems = action.payload;
        },
        updateInvoice: (state, action)=>{
            state.invoices = state.invoices.map((item)=>{
                if(item.InvoiceNumber == action.payload.InvoiceNumber)
                {
                    return action.payload;
                }
                else
                {
                    return item;
                }
            });
        },

        addToCart: (state, action)=>{
            if(state.cart.length > 0)
            {
                //check if current
                let supplement = state.cart.find(item =>{
                    return item.ID === action.payload.ID
                });
                if(supplement)
                {
                    supplement.Quantity += 1;
                    return;
                }

            }
            state.cart = [...state.cart, {...action.payload, Quantity: 1}];
        },
        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter((current)=>{
                return current.ID !== action.payload.ID;
            });
        },
        setQuantity: (state, action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.ID == action.payload.ID)
                {
                    if(item.Quantity <= 0)
                    {
                        return {...item, Quantity: 0};
                    }
                    else
                    {
                        return action.payload;
                    }
                }
                else
                {
                    return item;
                }
            });
        },
        completePurchase : (state, action)=>{
            state.cart = [];
            state.invoices = [...state.invoices, action.payload];
        },
        cancelPurchase: (state, action)=>{
            state.cart = [];
        }
    }

});

export const {loadunpaid, loadinvoices, updateInvoice,addToCart, removeFromCart, setQuantity, completePurchase, cancelPurchase,loaditems} = invoicing.actions;
export default  invoicing.reducer;
