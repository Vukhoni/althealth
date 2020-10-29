import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {loadClients} from '../../clients';
import * as althealth from '../../constants';
import {connect} from "react-redux";
import 'react-data-grid/dist/react-data-grid.css';
const {fields} = althealth.default;

const ClientMaintenance = ({clients, [loadClients.type]: all }) =>{
    useEffect(()=>{
        all();
    },[]);

    return (
        <Grid container>
            <Grid item xs={12} >
            <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
            <AgGridReact

                rowData={clients}
                onRowDoubleClicked={(arg)=>{
                    console.log(arg);
                }}
                >
                <AgGridColumn field="ID" filter={true} headerName={"Client ID"}></AgGridColumn>
                <AgGridColumn field={fields.Name} filter={true} headerName={fields.Name}></AgGridColumn>
                <AgGridColumn field={fields.Surname} filter={true} headerName={fields.Surname}></AgGridColumn>
                <AgGridColumn field={fields.Address} filter={true} headerName={fields.Address}></AgGridColumn>
                <AgGridColumn field={fields.Code} filter={true} headerName={fields.Code}></AgGridColumn>
                <AgGridColumn field={fields.Cellphone} filter={true} headerName={fields.Cellphone}></AgGridColumn>
                <AgGridColumn field={fields.Workphone} filter={true} headerName={fields.Workphone}></AgGridColumn>
                <AgGridColumn field={fields.Telephone} filter={true} headerName={fields.Telephone}></AgGridColumn>
                <AgGridColumn field={fields.Email} filter={true} headerName={fields.Email}></AgGridColumn>
            </AgGridReact>
            </div>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state =>{

    return {
        clients: state.clients.clients
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadClients.type]: ()=>{
            dispatch(loadClients())
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(ClientMaintenance);



