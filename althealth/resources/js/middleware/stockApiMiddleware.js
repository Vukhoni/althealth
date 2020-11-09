import {loadLowStock,loadStock, addSupplement,editSupplement,deleteSupplement} from "../stock";
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
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case loadStock.type:
            axios.get(`${supplements}`).then((res)=>{
                const {data} =res.data;
                next(loadStock(data));
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });

            break;
            case addSupplement.type:


                axios.post(supplements,{...action.payload, ID: action.payload.SupplementID}).then((res)=>{
                    const {data} =res.data;
                    next(addSupplement(data));
                    alert(`Successfully added ${data}`);
                }).catch((error)=>{
                    alert(`Event failed, reason: ${error}`);
                });
                break;
            case editSupplement.type:

                axios.put(`${supplements}/${action.payload.SupplementID}`,{...action.payload, ID: action.payload.SupplementID}).then((res)=>{
                    const {data} =res.data;
                    next(editSupplement(data));
                    alert(`Successfully updated ${data}`);
                }).catch((error)=>{
                    alert(`Event failed, reason: ${error}`);
                });
                break;
            case deleteSupplement.type:

                axios.delete(`${supplements}/${action.payload.ID}`,{...action.payload}).then((res)=>{
                    next(deleteSupplement(action.payload));
                    alert(`Successfully removed ${action.payload}`);
                }).catch((error)=>{
                    alert(`Event failed, reason: ${error}`);
                });
                break;
        default:
            next(action);
    }
};

export default stockApiMiddleware;
