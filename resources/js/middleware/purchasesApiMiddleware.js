import {loadMonthly} from "../purchases";
import {setLoading} from "../ui";
import axios from 'axios';

const url = 'http://localhost:8000/api/monthlyPurchases';
const purchasesApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadMonthly.type:
            console.log(action.payload);
            dispatch(setLoading({monthlyPurchases: true}))
            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;
                console.log('Middleware invoked');
                next(loadMonthly(data));
                dispatch(setLoading({monthlyPurchases: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({monthlyPurchases: false}));
                }
            )
            break;
        default:
            next(action);
    }
};

export default purchasesApiMiddleware;