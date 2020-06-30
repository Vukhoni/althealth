import React from 'react';
import BirthDays from "./Birthdays";
import InvoiceTable from "../presentational/InvoiceTable";
import {loadunpaid} from "../../invoices";
import {loadLowStock} from "../../stock";
import {connect} from "react-redux";
import StockTable from "../presentational/StockTable";
const Home = ({invoices, stock,ui, [loadunpaid.type]:loadUnpaid,[loadLowStock.type]: loadLow}) =>
{

    return(<div className={'row'}>
        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-4'>
            <BirthDays/>
        </div>
        <div className='col-xl-9 col-lg-8 col-md-5 col-sm-4'>
            <h2>Unpaid Invoices</h2>
            <InvoiceTable invoices={invoices} ui={ui} load={loadUnpaid} />
            <h2>
                Low Stock
            </h2>
            <StockTable stock={stock} ui={ui} load={loadLow}/>
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
export default connect(mapStateToProps,mapDispatchToProps)( Home);