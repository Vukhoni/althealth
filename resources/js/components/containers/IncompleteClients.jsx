import React, {Fragment,useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons/faSmile";
import ScaleLoader from "react-spinners/ScaleLoader";
import {loadIncomplete} from "../../clients";
import {connect} from "react-redux";


const IncompleteClients = ({clients, ui, [loadIncomplete.type]:load})=>{
    useEffect(()=>{
        load();
    },[]);


    if(ui.loading && ui.loading.incompleteClients)
        return <ScaleLoader/>
    return (
        <Fragment>

            <div className='col-12'>
                <table className="table table-striped table-bordered ">
                    <thead className='thead-light'>
                    <tr>
                        <th>
                            Client
                        </th>
                        <th>
                            Home
                        </th>
                        <th>
                            Work
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Cell
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {render(clients)}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
const render = (clients) =>{
    if (clients.length === 0)
    {
        return (
            <tr>
                <td colSpan='4'>
                    <h4 className='text-center'>All Clients are properly filled</h4>

                    <h5 className='text-center'><FontAwesomeIcon icon={faSmile} /></h5>

                </td>
            </tr>
        );
    }
    else
    {
        return clients.map(client =>{
            return(
                <tr key={client.ID}>
                    <td>
                        {client.ID}
                    </td>
                    <td>
                        {client.Telephone}
                    </td>
                    <td>
                        {client.Workphone}
                    </td>
                    <td>
                        {client.Cell}
                    </td>
                    <td>
                        {client.Email}
                    </td>
                </tr>
            )
        })
    }

}
const mapStateToProps = state =>{

    return {
        clients: state.clients.incomplete,
        ui: state.ui,
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