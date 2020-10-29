import {loadMonthly} from "../purchases";
import {setLoading} from "../ui";
import {baseUrl} from '../constants'
import axios from 'axios';


const url = `${baseUrl}/api/monthlyPurchases`;
const purchasesApiMiddleware = ({getState, dispatch }) => next => action =>{
    switch (action.type) {

        case loadMonthly.type:

            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;

                next(loadMonthly(data));


            })
            break;
        default:
            next(action);
    }
};

export default purchasesApiMiddleware;
