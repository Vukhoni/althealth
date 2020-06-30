import React, {useState, useEffect, Fragment} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFrown} from '@fortawesome/free-solid-svg-icons/faFrown';
import ScaleLoader from "react-spinners/ScaleLoader";
import {loadbirthdays} from "../../birthdays";

const BirthDays = ({birthdays, ui,[loadbirthdays.type]: load}) =>{

    useEffect(()=>{
        load();
    },[]);
    let result = (ui.loading && ui.loading.birthdays)? <ScaleLoader/> : render(birthdays);

    return (<div className="card" >
        <div className="card-header bg-primary">
            Birthday(s) { birthdays.length !== 0 && <span className="badge badge-warning">{birthdays.length}</span>}
        </div>
        <div className='card-body bg-secondary'>
            {result}
        </div>

    </div>)


}
const render = (birthDays) => {

    if (birthDays.length === 0)
    {
        return (<Fragment>
            <h4 className='text-center'>There are no birthdays today</h4>

            <h5 className='text-center'><FontAwesomeIcon icon={faFrown} /></h5>

        </Fragment>);
    }
    else
    {
        let result = birthDays.map((birthday) =>{
            return (<li className="list-group-item" key={birthday.ID}>{birthday.Name} <span className="badge badge-warning"> {birthday.Age}</span></li>);
        });
        console.log(result);
        return (
            <ul className="list-group">
                {result}
            </ul>
        )
    }
}

const mapStateToProps = state =>{

    return {
        birthdays: state.birthdays,
        ui: state.ui,
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