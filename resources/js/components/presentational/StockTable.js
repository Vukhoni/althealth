import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons/faSmile";
import Paginator from './Paginator';
import ScaleLoader from "react-spinners/ScaleLoader";

const render = (stock) =>{
    if (stock.length === 0)
    {
        return (
            <tr>
                <td colSpan='4'>
                    <h4 className='text-center'>All levels look okay</h4>

                    <h5 className='text-center'><FontAwesomeIcon icon={faSmile} /></h5>

                </td>
            </tr>
        );
    }
    else
    {
        return stock.map(item =>{
            return(
                <tr key={item.Supplement}>
                    <td>
                        {item.Supplement}
                    </td>
                    <td>
                        {item.SupplierInformation}
                    </td>
                    <td>
                        {item.MinLevel}
                    </td>
                    <td>
                        {item.CurrentLevel}
                    </td>
                </tr>
            )
        })
    }

}
const StockTable = ({stock, ui, load}) => {

    useEffect(()=>{
        load(stock);
    },[])
    if(ui.loading && ui.loading.lowStock)
        return <ScaleLoader/>

    return(
        <table className="table table-striped table-bordered ">
            <thead className='thead-light'>
            <tr>
                <th>
                    Supplement
                </th>
                <th>
                    Supplier Information
                </th>
                <th>
                    Min Level
                </th>
                <th>
                    Current Stock
                </th>
            </tr>
            </thead>
            <tbody>
            {render(stock.data)}
            </tbody>
            <tfoot>
            <tr>
                <td colSpan='4'>
                    <Paginator page={stock.page} first={stock.first} last={stock.last} load ={(next)=>{
                        load({...stock,page:next})
                    }}/>
                </td>
            </tr>
            </tfoot>
        </table>
    )
}
export default StockTable;