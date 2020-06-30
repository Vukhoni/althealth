import {loadunpaid} from "../invoices";
import {setLoading} from "../ui";
import axios from 'axios';

const url = 'http://localhost:8000/api/unpaidinvoices';
const invoicingApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadunpaid.type:
            dispatch(setLoading({...loading,unpaidInvoices: true}))
            axios.get(url).then((res)=>{
                const {data,meta} =res.data;
                next(loadunpaid({
                    data: data,
                    page: meta.current_page,
                    first: meta.from,
                    last: meta.last_page,
                    total: meta.total,
                }));
                dispatch(setLoading({unpaidInvoices: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({unpaidInvoices: false}));
                }
            )
            break;
        default:
            next(action);
    }
};

export default invoicingApiMiddleware;