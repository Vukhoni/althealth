import {loadTopTen, loadClients, addClient, loadIncomplete} from "../clients";
import {setLoading} from "../ui";
import axios from 'axios';

const url = 'http://localhost/althealth/api/toptenclients';
const clients = 'http://localhost/althealth/api/clients';
const incomplete = 'http://localhost/althealth/api/incompleteclients';
const clientsApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadIncomplete.type:

            dispatch(setLoading({...loading,incompleteClients: true}));
            axios.get(`${incomplete}`).then((res)=>{

                const {data} =res.data;
                next(loadIncomplete(data));
                dispatch(setLoading({incompleteClients: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({incompleteClients: false}));
                }
            );
            break;
        case loadTopTen.type:

            dispatch(setLoading({...loading,topTenClients: true}));
            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;
                next(loadTopTen(data));
                dispatch(setLoading({topTenClients: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({topTenClients: false}));
                }
            );
            break;
        case loadClients.type:
            dispatch(setLoading({...loading,clients: true}));
            axios.get(`${clients}`).then((res)=>{

                const {data} =res.data;
                next(loadClients(data));
                dispatch(setLoading({clients: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({clients: false}));
                }
            );
            break;
        case addClient.type:
            dispatch(setLoading({...loading,clients: true}));
            axios.post(action.payload).then((res)=>{

                const {data} =res.data;
                next(addClient(data));
                dispatch(setLoading({clients: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({clients: false}));
                }
            );
        default:
            next(action);
    }
};

export default clientsApiMiddleware;
