import {createSlice} from "@reduxjs/toolkit";
const name = 'clients'
const clients = createSlice({
    name,
    initialState:{
        clients:[],
        ten:[],
        incomplete:[]
    },
    reducers:{
        loadTopTen : (state, action)=>{
            state.ten = action.payload;
        },
        loadIncomplete : (state, action)=>{
            state.incomplete = action.payload;
        },
        loadClients: (state,action) => {
            state.clients = action.payload;
        },
        addClient: () =>{

        },
        editClient: () =>{

        },
        deleteClient: () =>{

        },

    }

});
export const {loadTopTen, loadClients, addClient, loadIncomplete} = clients.actions;
export default  clients.reducer;
