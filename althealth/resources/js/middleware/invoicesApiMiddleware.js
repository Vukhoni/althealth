import {loadunpaid} from "../invoices";
import {baseUrl} from '../constants'
import axios from 'axios';

const url = `${baseUrl}/api/unpaidinvoices`;
const invoicingApiMiddleware = ({getState, dispatch }) => next => action =>{

    switch (action.type) {

        case loadunpaid.type:

            axios.get(`${url}?page=${action.payload.page}`).then((res)=>{
                const {data,meta} =res.data;
                next(loadunpaid(data));


            })
            break;
        default:
            next(action);
    }
};

export default invoicingApiMiddleware;
