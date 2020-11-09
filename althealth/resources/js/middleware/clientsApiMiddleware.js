import {loadTopTen, loadClients, addClient, loadIncomplete} from "../clients";

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
            });;
            break;
        case loadClients.type:

            axios.get(`${clients}`).then((res)=>{

                const {data} =res.data;
                next(loadClients(data));


            });
            break;
        case addClient.type:

            axios.post(action.payload).then((res)=>{

                const {data} =res.data;
                next(addClient(data));


            });
        default:
            next(action);
    }
};

export default clientsApiMiddleware;
