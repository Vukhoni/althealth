import {loadunpaid,loadinvoices,updateInvoice,completePurchase,loaditems} from "../invoices";
import {baseUrl} from '../constants'
import axios from 'axios';

const url = `${baseUrl}/api/unpaidinvoices`;
const invoices = `${baseUrl}/api/invoices`;
const invoiceitems = `${baseUrl}/api/invoiceitems`;
const invoicingApiMiddleware = ({getState, dispatch }) => next => action =>{

    switch (action.type) {

        case loadunpaid.type:

            axios.get(`${url}`).then((res)=>{
                const {data} =res.data;
                next(loadunpaid(data));
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case loadinvoices.type:
            axios.get(`${invoices}`).then((res)=>{
                const {data} =res.data;
                next(loadinvoices(data));
                axios.get(`${invoiceitems}`).then((res)=>{
                    const {data} =res.data;
                    next(loaditems(data));
                }).catch((error)=>{
                    alert(`Event failed, reason: ${error}`);
                });
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case updateInvoice.type:
            axios.put(`${invoices}/${action.payload.InvoiceNumber}`, action.payload).then((res)=>{
                const {data} =res.data;
                next(updateInvoice(data));
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        case completePurchase.type:
            axios.post(`${invoices}`, action.payload).then((res)=>{
                const {data} =res.data;
                next(completePurchase(data));
            }).catch((error)=>{
                alert(`Event failed, reason: ${error}`);
            });
            break;
        default:
            next(action);
    }
};

export default invoicingApiMiddleware;
