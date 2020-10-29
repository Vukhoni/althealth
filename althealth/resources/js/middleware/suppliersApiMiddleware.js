import {loadSuppliers, addSupplier, editSupplier, deleteSupplier} from "../suppliers";

import {baseUrl} from '../constants';
import axios from 'axios';

const url = `${baseUrl}/api/suppliers`;
const suppliersApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadSuppliers.type:


            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;
                next(loadSuppliers(data));


            });
            break;
        case addSupplier.type:

            axios.post(action.payload).then((res)=>{

                const {data} =res.data;
                next(addSupplier(data));


            })
            break;
        case editSupplier.type:

            axios.put(action.payload).then((res)=>{

                const {data} =res.data;
                next(editSupplier(data));


            })
            break;
        case deleteSupplier.type:

            axios.delete(action.payload).then((res)=>{

                const {data} =res.data;
                next(deleteSupplier(data));


            })
            break;
        default:
            next(action);
    }
};

export default suppliersApiMiddleware;
