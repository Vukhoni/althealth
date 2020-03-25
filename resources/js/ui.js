import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const name = 'ui'
const ui = createSlice({
    name,
    initialState:{
        loading: {},
        error:{}
    },
    reducers:{
        setLoading: (state, action) =>{
            state.loading = action.payload;
        }
    }

});
export const {setLoading} = ui.actions;
export default  ui.reducer;
