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
        addClient: (state,action) =>{
            state.clients = [...state.clients,action.payload];
        },
        editClient: (state,action) =>{
            state.clients = state.clients.map(client =>{
                if(client.ID === action.payload.ID)
                {
                    return action.payload;
                }
                else
                {
                    return client;
                }
            })
        },
        deleteClient: (state,action) =>{
            state.clients = state.clients.filter(client =>{
                return client.ID !== action.payload.ID;
            })
        },

    }

});
export const {loadTopTen, loadClients, loadIncomplete, addClient, editClient, deleteClient} = clients.actions;
export default  clients.reducer;
