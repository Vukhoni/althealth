import React, {Fragment, useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from "@fortawesome/free-solid-svg-icons/faFrown";
import ScaleLoader from "react-spinners/ScaleLoader";
import {loadTopTen} from "../../clients";
import {connect} from "react-redux";


const TopTenClients = ({clients, ui, [loadTopTen.type]:load})=>{

    useEffect(()=>{
            load();
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
                data: clients.map(client =>{
                    return {
                        name: client.Client,
                        y: client.Frequency
                    }
                })
            }
        ]
    };

    if(ui.loading && ui.loading.topTenClients)
        return <ScaleLoader/>
    return (
        <Fragment>

            <div className='col-6'>
                <table className="table table-striped table-bordered ">
                    <thead className='thead-light'>
                    <tr>
                        <th>
                            Client
                        </th>
                        <th>
                            Frequency
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {render(clients)}
                    </tbody>
                </table>
            </div>
            <div className='col-6'>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </Fragment>
    )
}
const render = (clients) =>{
    if (clients.length === 0)
    {
        return (
            <tr>
                <td colSpan='2'>
                    <h4 className='text-center'>Something Went wrong fetching clients</h4>

                    <h5 className='text-center'><FontAwesomeIcon icon={faFrown} /></h5>

                </td>
            </tr>
        );
    }
    else
    {
        return clients.map(client =>{
            return(
                <tr key={client.Client}>
                    <td>
                        {client.Client}
                    </td>
                    <td>
                        {client.Frequency}
                    </td>
                </tr>
            )
        })
    }

}
const mapStateToProps = state =>{

    return {
        clients: state.clients.ten,
        ui: state.ui,
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