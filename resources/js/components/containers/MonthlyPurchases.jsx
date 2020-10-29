import React, {Fragment, useEffect, useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from "@fortawesome/free-solid-svg-icons/faFrown";
import ScaleLoader from "react-spinners/ScaleLoader";
import {loadMonthly} from "../../purchases";
import {connect} from "react-redux";


const MonthlyPurchases = ({purchases, ui, [loadMonthly.type]:load})=>{

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
                data: purchases.map(purchase =>{
                    return {
                        name: purchase.Month,
                        y: purchase.Purchases
                    }
                })
            }
        ]
    };

    if(ui.loading && ui.loading.monthlyPurchases)
        return <ScaleLoader/>
    return (
        <Fragment>
            <h2>Monthly Purchases</h2>
            <div className='row'>
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
                        {render(purchases)}
                        </tbody>
                    </table>
                </div>
                <div className='col-6'>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        </Fragment>
    )
}
const render = (purchases) =>{
    if (purchases.length === 0)
    {
        return (
            <tr>
                <td colSpan='2'>
                    <h4 className='text-center'>Something Went wrong fetching purchases</h4>

                    <h5 className='text-center'><FontAwesomeIcon icon={faFrown} /></h5>

                </td>
            </tr>
        );
    }
    else
    {

        return purchases.map(purchase =>{
            return(
                <tr key={purchase.Month}>
                    <td>
                        {purchase.Month}
                    </td>
                    <td>
                        {purchase.Purchases}
                    </td>
                </tr>
            )
        })
    }

}
const mapStateToProps = state =>{

    return {
        purchases: state.purchases.monthly,
        ui: state.ui,
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