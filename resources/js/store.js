import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import birthdaysreducer from './birthdays';
import birthdaysApitMiddleware from './middleware/birthdaysApiMiddleware';
import invoicingApiMiddleware from './middleware/invoicesApiMiddleware';
import invoicingreducer from './invoices';
import uireducer from './ui';

const reducer = combineReducers({
    birthdays: birthdaysreducer,
    invoicing: invoicingreducer,
    ui: uireducer
});
export default function () {
    return configureStore({reducer, middleware: [...getDefaultMiddleware(),birthdaysApitMiddleware, invoicingApiMiddleware]});
}