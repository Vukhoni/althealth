import {createSlice} from "@reduxjs/toolkit";
const name = 'references'
const references = createSlice({
    name,
    initialState:[],
    reducers:{
        loadReferences : (state, action)=>{
            return action.payload;
        }
    }

});
export const {loadReferences} = references.actions;
export default  references.reducer;
