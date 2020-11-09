import {loadSuppliers, addSupplier, editSupplier, deleteSupplier} from "../suppliers";

import {baseUrl} from '../constants';
import axios from 'axios';

const url = `${baseUrl}/api/suppliers`;
const suppliersApiMiddleware = ({getState, dispatch }) => next => action =>{

    switch (action.type) {

        case loadSuppliers.type:


            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;
                next(loadSuppliers(data));

            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case addSupplier.type:
            let item = {...action.payload, ID: action.payload.SupplierID};

            axios.post(url,item).then((res)=>{
                const {data} =res.data;
                next(addSupplier(data));
                alert(`Successfully added ${data}`);
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case editSupplier.type:

            axios.put(`${url}/${action.payload.ID}`,action.payload).then((res)=>{
                const {data} =res.data;
                next(editSupplier(data));

                alert(`Successfully updated ${data}`);
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case deleteSupplier.type:

            axios.delete(`${url}/${action.payload.ID}`,action.payload).then((res)=>{
                next(deleteSupplier(action.payload));
                alert(`Successfully removed ${action.payload}`);
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        default:
            next(action);

    }
};

export default suppliersApiMiddleware;
