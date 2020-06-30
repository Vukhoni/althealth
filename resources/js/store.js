import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import birthdaysreducer from './birthdays';
import invoicingreducer from './invoices';
import stockreducer from './stock';
import uireducer from './ui';
import birthdaysApitMiddleware from './middleware/birthdaysApiMiddleware';
import invoicingApiMiddleware from './middleware/invoicesApiMiddleware';
import stockApiMiddleware from './middleware/stockApiMiddleware';


const reducer = combineReducers({
    birthdays: birthdaysreducer,
    invoicing: invoicingreducer,
    stock: stockreducer,
    ui: uireducer
});
export default function () {
    return configureStore({reducer, middleware: [...getDefaultMiddleware(),birthdaysApitMiddleware, invoicingApiMiddleware,stockApiMiddleware]});
}