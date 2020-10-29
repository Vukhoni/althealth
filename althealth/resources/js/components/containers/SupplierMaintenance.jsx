import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {loadSuppliers} from '../../suppliers';
import * as althealth from '../../constants';
import {connect} from "react-redux";
import 'react-data-grid/dist/react-data-grid.css';
const {fields} = althealth.default;

const SupplierMaintenance = ({suppliers, [loadSuppliers.type]: all }) =>{
    useEffect(()=>{
        all();
    },[]);

    return (
        <Grid container>
            <Grid item xs={12} >
            <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
            <AgGridReact

                rowData={suppliers}
                onRowDoubleClicked={(arg)=>{
                    console.log(arg);
                }}
                >
                <AgGridColumn field="ID" filter={true} headerName={"Supplier ID"}></AgGridColumn>
                <AgGridColumn field={fields.Contact} filter={true} headerName={fields.Name}></AgGridColumn>
                <AgGridColumn field={fields.Telephone} filter={true} headerName={fields.Telephone}></AgGridColumn>
                <AgGridColumn field={fields.Email} filter={true} headerName={fields.Email}></AgGridColumn>
                <AgGridColumn field={fields.Bank} filter={true} headerName={fields.Bank}></AgGridColumn>
                <AgGridColumn field={fields.BankCode} filter={true} headerName={fields.BankCode}></AgGridColumn>
                <AgGridColumn field={fields.BankNumber} filter={true} headerName={fields.BankNumber}></AgGridColumn>
                <AgGridColumn field={fields.AccountType} filter={true} headerName={fields.AccountType}></AgGridColumn>

            </AgGridReact>
            </div>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state =>{

    return {
        suppliers: state.suppliers
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadSuppliers.type]: ()=>{
            dispatch(loadSuppliers())
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(SupplierMaintenance);



