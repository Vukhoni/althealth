import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons/faSmile";
import Paginator from './paginator';
import ScaleLoader from "react-spinners/ScaleLoader";

const render = (invoices) =>{
    if (invoices.length === 0)
    {
        return (
            <tr>
                <td colSpan='4'>
                    <h4 className='text-center'>All invoice up to date</h4>

                    <h5 className='text-center'><FontAwesomeIcon icon={faSmile} /></h5>

                </td>
            </tr>
        );
    }
    else
    {
        return invoices.map(invoice =>{
            return(
                <tr key={invoice.InvoiceNumber}>
                    <td>
                        {invoice.Date}
                    </td>
                    <td>
                        {invoice.ClientID}
                    </td>
                    <td>
                        {invoice.Client}
                    </td>
                    <td>
                        {invoice.InvoiceNumber}
                    </td>
                </tr>
            )
        })
    }

}
const InvoiceTable = ({invoices, ui, load}) => {

    useEffect(()=>{
        load(invoices);
    },[])
    if(ui.loading && ui.loading.unpaidInvoices)
       return <ScaleLoader/>

    return(
        <table className="table table-striped table-bordered ">
            <thead className='thead-light'>
                <tr>
                    <th>
                        Invoice Date
                    </th>
                    <th>
                        Client ID
                    </th>
                    <th>
                        Client
                    </th>
                    <th>
                        Invoice Number
                    </th>
                </tr>
            </thead>
            <tbody>
            {render(invoices.data)}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='4'>
                        <Paginator page={invoices.page} first={invoices.first} last={invoices.last} load ={(page)=>{
                            load({
                                ...invoices, page
                            })
                        }}/>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}
export default InvoiceTable;