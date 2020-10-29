import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { loadTopTen} from '../../clients';
import * as althealth from '../../constants';
import {connect} from "react-redux";

const topTenCols =[
    {
        field: 'Client',
        headerName: 'Client'
    }
    ,
    {
        field: 'Frequency',
        headerName: 'Frequency'
    }
]
const TopTenClients = ({topten, [loadTopTen.type]: ten }) =>{

    useEffect(()=>{
        ten();
    },[]);
    let options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top 10'
    },
    xAxis:{
        type: 'category'
    },
    series: [
        {
            name: 'Top Ten',
            data: topten.map(client =>{
                return {
                    name: client.Client,
                    y: client.Frequency
                }
            })
        }
    ]
};



    let map = topten.map((item, index)=>{
        return {...item,id : item.Client}
    });

    return (

        <Grid container>
            <Grid item xs={12} sm={6}>
            <DataGrid rows={map} columns={topTenCols} autoPageSize={true} autoHeight={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={options} />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state =>{

    return {

        topten: state.clients.ten

    }
}
const mapDispatchToProps = dispatch =>{
    return {


        [loadTopTen.type]: ()=>{
            dispatch(loadTopTen());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( TopTenClients);




