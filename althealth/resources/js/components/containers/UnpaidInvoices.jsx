
import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {useHistory} from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {loadunpaid} from '../../invoices';
import * as althealth from '../../constants';
import {connect} from "react-redux";
import 'react-data-grid/dist/react-data-grid.css';
const {fields} = althealth.default;

const UnpaidInvoiceMaintenance = ({invoices, [loadunpaid.type]: load}) =>{
    useEffect(()=>{
        load();
    },[]);
    let history = useHistory();

    return (<Grid container>
        <Grid item xs={12} >
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
        <AgGridReact

            rowData={invoices}
            onRowDoubleClicked={(arg)=>{
                history.push(`/viewinvoice/${arg.data.InvoiceNumber}`);
            }}

            >
            <AgGridColumn field="InvoiceNumber" filter={true} headerName={"Invoice Number"}></AgGridColumn>
            <AgGridColumn field="ClientID" filter={true} headerName="Client ID"></AgGridColumn>
            <AgGridColumn field="Client" filter={true} headerName="Client"></AgGridColumn>
            <AgGridColumn field="Date" filter={true} headerName="Date"></AgGridColumn>
            <AgGridColumn  headerName="Invoice Paid" valueFormatter={(args)=>{
                switch (args.value) {
                    case 'Y':
                        return 'Yes';


                    default:
                        return 'No';

                }
            }}></AgGridColumn>







        </AgGridReact>
        </div>
        </Grid>
    </Grid>)
}

const mapStateToProps = state =>{

    return {
        invoices: state.invoicing.unpaid,
        user: state.authentication
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadunpaid.type]: ()=>{
            dispatch(loadunpaid());
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(UnpaidInvoiceMaintenance);
