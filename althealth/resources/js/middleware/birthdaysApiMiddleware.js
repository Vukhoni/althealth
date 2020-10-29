import {loadbirthdays} from "../birthdays";
import {baseUrl} from '../constants'
import axios from 'axios';

const url = `${baseUrl}/api/birthdays`;
const birthdaysApiMiddleware = ({getState, dispatch }) => next => action =>{

    switch (action.type) {

        case loadbirthdays.type:

            axios.get(url).then((res)=>{
                next(loadbirthdays(res.data.data));


            })
            break;
        default:
            next(action);
    }
};

export default birthdaysApiMiddleware;
