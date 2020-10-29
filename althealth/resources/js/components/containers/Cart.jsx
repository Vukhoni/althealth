import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'

import { removeSupplementFromCart, increaseSupplementQuantity, decreaseSupplementQuantity} from '../../cart';
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <tr  key={item.id}>
                            <td>
                                {item.desc}
                            </td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <div className='btn-group'>
                                    <button className="btn btn-primary" onClick={()=>{this.handleAddQuantity(item.id)}}>Increase</button>
                                    <button className="btn btn-warning" onClick={()=>{this.handleSubtractQuantity(item.id)}}>Decrease</button>
                                    <button className="btn btn-danger" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>


                                </div>
                            </td>

                        </tr>

                    )
                })
            ):

            (
                <p>Nothing.</p>
            )
        return(
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <table className='table table-striped table-light'>
                    <thead>

                    </thead>
                    <tbody></tbody>
                    {addedItems}
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.cart.items,
        total: state.cart.total

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeSupplementFromCart(id))},
        addQuantity: (id)=>{dispatch(increaseSupplementQuantity(id))},
        subtractQuantity: (id)=>{dispatch(decreaseSupplementQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)