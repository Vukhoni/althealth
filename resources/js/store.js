import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import birthdaysreducer from './birthdays';
import invoicingreducer from './invoices';
import stockreducer from './stock';
import clientsreducer from './clients';
import purchasesreducer from './purchases';
import referencesreducer from './reference';
//import cartreducer from './cart';
import uireducer from './ui';
import birthdaysApitMiddleware from './middleware/birthdaysApiMiddleware';
import invoicingApiMiddleware from './middleware/invoicesApiMiddleware';
import stockApiMiddleware from './middleware/stockApiMiddleware';
import clientsApiMiddleware from './middleware/clientsApiMiddleware';
import purchasesApiMiddleware from './middleware/purchasesApiMiddleware';
import referencesApiMiddleware from "./middleware/referencesApiMiddleware";



const reducer = combineReducers({
    birthdays: birthdaysreducer,
    invoicing: invoicingreducer,
    stock: stockreducer,
    clients: clientsreducer,
    purchases: purchasesreducer,
    references: referencesreducer,
    //cart: cartreducer,
    ui: uireducer
});
export default function () {
    return configureStore({reducer, middleware: [...getDefaultMiddleware(),birthdaysApitMiddleware, invoicingApiMiddleware,stockApiMiddleware,clientsApiMiddleware,purchasesApiMiddleware,referencesApiMiddleware]});
}
