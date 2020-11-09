import {loadLowStock} from "../stock";
import {setLoading} from "../ui";
import axios from 'axios';

const url = 'http://localhost:8000/api/lowstocks';
const stockApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadLowStock.type:

            dispatch(setLoading({...loading,lowStock: true}))
            axios.get(`${url}?page=${action.payload.page}`).then((res)=>{

                const {data,meta} =res.data;
                next(loadLowStock({
                    data: data,
                    page: meta.current_page,
                    first: meta.from,
                    last: meta.last_page,
                    total: meta.total,
                }));
                dispatch(setLoading({lowStock: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({lowStock: false}));
                }
            )
            break;
        default:
            next(action);
    }
};

export default stockApiMiddleware;