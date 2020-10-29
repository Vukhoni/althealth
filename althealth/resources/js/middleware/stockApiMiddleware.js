import {loadLowStock,loadStock} from "../stock";
import {baseUrl} from '../constants';
import axios from 'axios';


const lowstock = `${baseUrl}/api/lowstocks`;
const supplements = `${baseUrl}/api/supplements`;
const stockApiMiddleware = ({getState, dispatch }) => next => action =>{
    switch (action.type) {

        case loadLowStock.type:
            axios.get(`${lowstock}`).then((res)=>{

                const {data} =res.data;
                next(loadLowStock(data));
            })
            break;
        case loadStock.type:
            axios.get(`${supplements}`).then((res)=>{
                const {data} =res.data;
                next(loadStock(data));
            })

            break;
        default:
            next(action);
    }
};

export default stockApiMiddleware;
