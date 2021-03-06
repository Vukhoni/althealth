import {loadTopTen, loadClients, addClient, loadIncomplete, editClient, deleteClient} from "../clients";

import {baseUrl} from '../constants';
import axios from 'axios';

const url = `${baseUrl}/api/toptenclients`;
const clients = `${baseUrl}/api/clients`;
const incomplete = `${baseUrl}/api/incompleteclients`;
const clientsApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadIncomplete.type:


            axios.get(`${incomplete}`).then((res)=>{

                const {data} =res.data;
                next(loadIncomplete(data));

            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });;
            break;
        case loadTopTen.type:


            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;
                next(loadTopTen(data));

            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case loadClients.type:

            axios.get(`${clients}`).then((res)=>{

                const {data} =res.data;
                next(loadClients(data));


            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case addClient.type:

            axios.post(action.payload).then((res)=>{

                const {data} =res.data;
                next(addClient(data));


            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case editClient.type:

            axios.patch(`${clients}/${action.payload.ID}`,action.payload).then((res)=>{

                const {data} =res.data;
                next(editClient(data));


            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case deleteClient.type:

                axios.delete(`${clients}/${action.payload.ID}`,action.payload).then((res)=>{


                    next(deleteClient(action.payload));


                }).catch((error)=>{
                    alert(`Event failed, reason: ${error}`);
                });
                break;
        default:
            next(action);
    }
};

export default clientsApiMiddleware;
