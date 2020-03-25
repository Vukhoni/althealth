import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import birthdaysreducer from './birthdays';
import birthdaysApitMiddleware from './middleware/birthdaysApiMiddleware';
import uireducer from './ui';

const reducer = combineReducers({
    birthdays: birthdaysreducer,
    ui: uireducer
});
export default function () {
    return configureStore({reducer, middleware: [...getDefaultMiddleware(),birthdaysApitMiddleware]})
}