import {loadbirthdays} from "../birthdays";
import {setLoading} from "../ui";
import axios from 'axios';

const url = 'http://localhost:8000/api/birthdays';
const birthdaysApiMiddleware = ({getState, dispatch }) => next => action =>{
    const loading = getState().ui.loading;
    switch (action.type) {

        case loadbirthdays.type:
            dispatch(setLoading({...loading,birthdays: true}))
            axios.get(url).then((res)=>{
                next(loadbirthdays(res.data.data));
                dispatch(setLoading({birthdays: false}));

            }).catch(
                ()=>{
                    dispatch(setLoading({birthdays: false}));
                }
            )
            break;
        default:
            next(action);
    }
};

export default birthdaysApiMiddleware;