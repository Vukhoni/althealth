import React, {Fragment, useState} from 'react';
import BirthDays from "./Birthdays";
import InvoiceTable from "../presentational/InvoiceTable";
import {loadunpaid} from "../../invoices";
import {loadLowStock} from "../../stock";
import {connect} from "react-redux";
import StockTable from "../presentational/StockTable";
const Unpaid = 'Unpaid';
const LowStock = 'LowStock';
const DayToDay = ({invoices, stock,ui, [loadunpaid.type]:loadUnpaid,[loadLowStock.type]: loadLow}) =>
{

    const [reportView, setReportView] = useState(Unpaid);
    const result = (reportView === Unpaid)? (<Fragment>
        <h2>Unpaid Invoices</h2>
        <InvoiceTable invoices={invoices} ui={ui} load={loadUnpaid} /></Fragment>):
        (<Fragment>
            <h2>
                Low Stock
            </h2>
            <StockTable stock={stock} ui={ui} load={loadLow}/>
        </Fragment>)
    return(<div
        className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
        <div className='col-8'>
            <ul className="btn-group">
                <button className={`btn ${reportView === Unpaid? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setReportView(Unpaid);
                }}>Unpaid Invoices</button>
                <button className={`btn ${reportView === LowStock? 'btn-primary': 'btn-secondary'}`} onClick={()=>{
                    setReportView(LowStock);
                }}>Low Stock</button>
            </ul>
            <br />
            {result}
        </div>
        <div className='col-4'>
            <BirthDays/>
        </div>

    </div>);
}
const mapStateToProps = state =>{

    return {
        invoices: state.invoicing.unpaid,
        stock: state.stock.low,
        ui: state.ui,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadLowStock.type]: (state)=>{
            dispatch(loadLowStock(state));
        },
        [loadunpaid.type]: (state)=>{
            dispatch(loadunpaid(state));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( DayToDay);