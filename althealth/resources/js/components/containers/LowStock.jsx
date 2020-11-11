
import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {loadLowStock} from '../../stock';
import * as althealth from '../../constants';
import {connect} from "react-redux";
import 'react-data-grid/dist/react-data-grid.css';
const {fields} = althealth.default;
//import {addSupplementToCart} from "../../cart";


const LowStock = ({supplements, [loadLowStock.type]: load}) =>{
    useEffect(()=>{
        load();
    },[]);
    
    
    return (<Grid container>
        <Grid item xs={12} >
        <Link component={RouterLink} to="/add-supplement">
                    Add Supplement
                </Link>
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
        <AgGridReact

            rowData={supplements}
           
            >
            <AgGridColumn field="Supplement" filter={true} headerName={"Supplement"}></AgGridColumn>
            <AgGridColumn field={'SupplierInformation'} filter={true} headerName={'Supplier Information'}></AgGridColumn>
            <AgGridColumn field="MinLevel" filter={true} headerName={"Minimum Level"}></AgGridColumn>
            <AgGridColumn field={'CurrentLevel'} filter={true} headerName={'CurrentLevel'}></AgGridColumn>

            



        </AgGridReact>
        </div>
        </Grid>
    </Grid>)
}

const mapStateToProps = state =>{

    return {
        supplements: state.stock.low
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadLowStock.type]: ()=>{
            dispatch(loadLowStock());
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(LowStock);
