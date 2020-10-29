import {loadReferences} from "../reference";
import {setLoading} from "../ui";
import {baseUrl} from '../constants';
import axios from 'axios';

const url = `${baseUrl}/api/references`;
const referencesApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadReferences.type:
            dispatch(setLoading({...loading,references: true}))
            axios.get(`${url}`).then((res)=>{

                const {data} =res.data;
                next(loadReferences(data));
                dispatch(setLoading({references: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({references: false}));
                }
            )
            break;
        default:
            next(action);
    }
};

export default referencesApiMiddleware;
