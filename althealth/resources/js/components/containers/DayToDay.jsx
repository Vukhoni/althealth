import React, {Fragment, useState} from 'react';
import BirthDays from "./Birthdays";


const DayToDay = () =>
{


    return(<div
        className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
        <div className='col-8'>
            <ul className="btn-group">
                <button className={`btn ${reportView === Unpaid? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setReportView(Unpaid);
                }}>Unpaid Invoices</button>
                <button className={`btn ${reportView === LowStock? 'btn-primary': 'btn-secondary'}`} onClick={()=>{
                    setReportView(LowStock);
                }}>Low Stock</button>
            </ul>
            <br />
            {result}
        </div>
        <div className='col-4'>
            <BirthDays/>
        </div>

    </div>);
}

export default DayToDay;
