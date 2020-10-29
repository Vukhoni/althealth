import React, {useState, useEffect, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {connect} from "react-redux";
import {loadbirthdays} from "../../birthdays";
import * as althealth from '../../constants';
const {fields} = althealth.default;

const BirthDays = ({birthdays, [loadbirthdays.type]: load}) =>{

    useEffect(()=>{
        load();
    },[]);
    return (<Grid container>
        <Grid item xs={12}>
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
            <AgGridReact

                rowData={birthdays}
                onRowDoubleClicked={(arg)=>{
                    console.log(arg);
                }}
                >
                <AgGridColumn field="ID" filter={true} headerName={"Client ID"}></AgGridColumn>
                <AgGridColumn field={fields.Name} filter={true} headerName={fields.Name}></AgGridColumn>
                <AgGridColumn field={'Age'} filter={true} headerName={'Age'}></AgGridColumn>
            </AgGridReact>
            </div>
        </Grid>

    </Grid>)


}


const mapStateToProps = state =>{

    return {
        birthdays: state.birthdays

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadbirthdays.type]: ()=>{
            dispatch(loadbirthdays());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( BirthDays);




