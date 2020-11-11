import React, {Fragment,useEffect} from 'react';
import Grid from '@material-ui/core/Grid'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {loadIncomplete} from "../../clients";
import {connect} from "react-redux";
import * as althealth from '../../constants';
const {fields} = althealth.default;

const IncompleteClients = ({clients, [loadIncomplete.type]:load})=>{
    useEffect(()=>{
        load();
    },[]);
    let history = useHistory();
    return (<Grid container>
        <Grid item xs={12} >
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
            <AgGridReact

                rowData={clients}
                onRowDoubleClicked={(arg)=>{
                    history.push(`/edit-client/${arg.data.ID}`)
                }}
                >
                <AgGridColumn field="ID" filter={true} headerName={"Client ID"}></AgGridColumn>
                <AgGridColumn field={fields.Cellphone} filter={true} headerName={fields.Cellphone}></AgGridColumn>
                <AgGridColumn field={fields.Workphone} filter={true} headerName={fields.Workphone}></AgGridColumn>
                <AgGridColumn field={fields.Telephone} filter={true} headerName={fields.Telephone}></AgGridColumn>
                <AgGridColumn field={fields.Email} filter={true} headerName={fields.Email}></AgGridColumn>
            </AgGridReact>
            </div>
        </Grid>

    </Grid>)
}

const mapStateToProps = state =>{

    return {
        clients: state.clients.incomplete
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadIncomplete.type]: ()=>{
            dispatch(loadIncomplete());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( IncompleteClients);






