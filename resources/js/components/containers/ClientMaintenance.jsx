import React, {Fragment, useState} from 'react';
import TopTenClients from "./TopTenClients";
import ClientForm from "./ClientForm";
import IncompleteClients from "./IncompleteClients";
import {addClient} from "../../clients";
import {loadReferences} from "../../reference";
import {connect} from "react-redux";
const Clients = 'Clients';
const TopTen = 'TopTen';
const MissingInfo = 'MissingInfo';
const Add = 'Add';
const Edit = 'Edit';
const ClientMaintenance = ({references, ui, [addClient.type]: add, [loadReferences.type]: load}) =>{
    const [view, setView] = useState(Clients);
    const [editItem, setEditItem] = useState({});
    let result;
    switch (view) {
        case Clients:
            result = <h1>This should be the table</h1>;
            break;
        case TopTen:
            result = <TopTenClients/>;
            break;
        case Add:
            result = <div className='col-6'><ClientForm references={references} ui={ui} load={load} createClient={add}/></div>
            break;
        case Edit:
            break;
        case MissingInfo:
            result = <IncompleteClients/>
            break;

    }
    return (
        <Fragment>
            <div className="btn-group">
                <button className={`btn ${view === Clients? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setView(Clients);
                }}>Clients</button>
                <button className={`btn ${view === TopTen? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setView(TopTen);
                }}>Top Ten Clients</button>
                <button className={`btn ${view === Add? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setView(Add);
                }}>Add Client</button>
                {(editItem && <button className={`btn ${view === Edit? 'btn-primary': 'btn-secondary'}`}  disabled={(editItem)} onClick={()=>{
                    setView(Edit);
                }}>Edit {editItem.Name} {editItem.Surname}</button>)}
                <button className={`btn ${view === MissingInfo? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setView(MissingInfo);
                }}>Missing Contact Info</button>


            </div>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                {result}
            </div>
        </Fragment>




    )
}

const mapStateToProps = state =>{

    return {
        references: state.references,
        ui: state.ui,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [addClient.type]: (item)=>{
            dispatch(addClient(item));
        },
        [loadReferences.type]: ()=>{dispatch(loadReferences())}
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(ClientMaintenance);
