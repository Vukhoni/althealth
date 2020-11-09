import React, {Fragment, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {loadMonthly} from "../../purchases";
import {connect} from "react-redux";


const MonthlyPurchases = ({purchases, [loadMonthly.type]:load})=>{

    useEffect(()=>{
        load();
    },[]);

    let options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Purchases'
        },
        xAxis:{
            type: 'category'
        },
        series: [
            {
                name: 'Purchases',
                data: purchases.map(purchase =>{
                    return {
                        name: purchase.Month,
                        y: purchase.Purchases
                    }
                })
            }
        ]
    };

    return(
        <Grid container>
            <Grid item xs={12} sm={6} >
            <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
            <AgGridReact

                rowData={purchases}
                onRowDoubleClicked={(arg)=>{
                    console.log(arg);
                }}
                >
                <AgGridColumn field="Month" filter={true} headerName={"Month"}></AgGridColumn>
                <AgGridColumn field={'Purchases'} filter={true} headerName={'Purchases'}></AgGridColumn>


            </AgGridReact>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} >
            <HighchartsReact highcharts={Highcharts} options={options} />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state =>{

    return {
        purchases: state.purchases.monthly
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadMonthly.type]: ()=>{
            dispatch(loadMonthly());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( MonthlyPurchases);
