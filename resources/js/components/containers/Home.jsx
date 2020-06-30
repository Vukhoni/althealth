import React from 'react';
import BirthDays from "./Birthdays";
import InvoiceTable from "../presentational/InvoiceTable";
import {loadunpaid} from "../../invoices";
import {connect} from "react-redux";
const Home = ({invoices, ui, [loadunpaid.type]:load}) =>
{

    return(<div className={'row'}>
        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-4'>
            <BirthDays/>
        </div>
        <div className='col-xl-9 col-lg-8 col-md-5 col-sm-4'>
            <h2>Unpaid Invoices</h2>
            <InvoiceTable invoices={invoices} ui={ui} load={(page) =>{
                load({...invoices, page});
            }} />
        </div>

    </div>);
}
const mapStateToProps = state =>{

    return {
        invoices: state.invoicing.unpaid,
        ui: state.ui,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadunpaid.type]: (state)=>{
            dispatch(loadunpaid(state));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( Home);