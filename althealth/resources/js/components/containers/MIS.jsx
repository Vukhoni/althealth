import React, {Fragment, useState} from 'react';
import BirthDays from "./Birthdays";
import InvoiceTable from "../presentational/InvoiceTable";
import {loadunpaid} from "../../invoices";
import {loadLowStock} from "../../stock";

import StockTable from "../presentational/StockTable";
import MonthlyPurchases from "./MonthlyPurchases";
import TopTenClients from "./TopTenClients";
const TopTen = 'TopTen';
const Purchases = 'Purchases';
const MIS = ({invoices, stock,ui, [loadunpaid.type]:loadUnpaid,[loadLowStock.type]: loadLow}) =>
{

    const [reportView, setReportView] = useState(TopTen);
    const result = (reportView === Purchases)? (<MonthlyPurchases/>):
        (<TopTenClients/>)
    return(
        <Fragment>
            <div className="btn-group">
                <button className={`btn ${reportView === TopTen? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setReportView(TopTen);
                }}>Top Ten Clients</button>
                <button className={`btn ${reportView === Purchases? 'btn-primary': 'btn-secondary'}`} onClick={()=>{
                    setReportView(Purchases);
                }}>Monthly Purchases</button>
            </div>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
            {result}
            </div>
        </Fragment>

    );
}
export default MIS;