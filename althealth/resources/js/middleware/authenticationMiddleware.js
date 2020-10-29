import {login,register, logout} from "../au";
import {baseUrl} from '../constants'
import axios from 'axios';


const authenticationMiddleware = ({getState, dispatch }) => next => action =>{

    switch (action.type) {

        case login.type:

            let token = axios.post(`${baseUrl}/login`,{...action.payload, ID: action.payload.ClientID}).then((response)=>{
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                let user = axios.get(`${baseUrl}/api/user`).then((response)=>{
                    next(login(response.data));
                });
            });

            break;
        case register.type:

                axios.post(`${baseUrl}/register`,{...action.payload, ID: action.payload.ClientID}).then((res)=>{
                    next(register(res.data.data));
                }).catch(

                )
                break;
        case logout.type:
            axios.post(`${baseUrl}/logout`,).then((res)=>{
                next(logout());
            }).catch(

            )
            break;
            break;
        default:
            next(action);
    }
};

export default authenticationMiddleware;
