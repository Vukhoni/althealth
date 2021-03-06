
import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {loadStock} from '../../stock';
import * as althealth from '../../constants';
import {connect} from "react-redux";
import 'react-data-grid/dist/react-data-grid.css';
const {fields} = althealth.default;
//import {addSupplementToCart} from "../../cart";


const SupplementMaintenance = ({supplements, user, [loadStock.type]: load}) =>{
    useEffect(()=>{
        load();
    },[]);
    let history = useHistory();
    let employeeContent
    if(user.is_employee){
        employeeContent =(
            <Fragment>
            <AgGridColumn field={fields.Cost} filter={true} headerName={fields.Cost} valueFormatter={(args)=>{
                return `R${args.value}`
            }}></AgGridColumn>
            <AgGridColumn field={fields.MinLevel} filter={true} headerName={fields.MinLevel}></AgGridColumn>
            <AgGridColumn field={fields.CurrentLevel} filter={true} headerName={fields.CurrentLevel}></AgGridColumn>
            <AgGridColumn field={fields.NappiCode} filter={true} headerName={fields.NappiCode}></AgGridColumn>
            <AgGridColumn field={fields.SupplierID} filter={true} headerName={fields.SupplierID}></AgGridColumn>
            </Fragment>
        )
    }
    return (<Grid container>
        <Grid item xs={12} >
        <Link component={RouterLink} to="/add-supplement">
                    Add Supplement
                </Link>
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
        <AgGridReact

            rowData={supplements}
            onRowDoubleClicked={(arg)=>{
                history.push(`/edit-supplement/${arg.data.ID}`)
            }}
            >
            <AgGridColumn field="ID" filter={true} headerName={"Supplement ID"}></AgGridColumn>
            <AgGridColumn field={fields.Description} filter={true} headerName={fields.Description}></AgGridColumn>

            {employeeContent}



        </AgGridReact>
        </div>
        </Grid>
    </Grid>)
}

const mapStateToProps = state =>{

    return {
        supplements: state.stock.stock,
        user: state.authentication
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadStock.type]: ()=>{
            dispatch(loadStock());
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(SupplementMaintenance);
