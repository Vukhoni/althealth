import React, {Fragment, useState} from 'react';
import {connect} from "react-redux";
import SupplementForm from "./SupplementForm";
//import {addSupplementToCart} from "../../cart";

const Supplements = 'Supplements';
const Add = 'Add';

const SupplementMaintenance = ({supplements, [addSupplementToCart.type]: add}) =>{
    const [view, setView] = useState(Supplements);

    let result;
    switch (view) {
        case Supplements:
            result = (<table className='table table-striped'>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                    </tr>
                </thead>
                <tbody>
                {(
                    supplements.map(supplement =>{
                      return (
                          <tr key={supplement.id}>
                              <td>
                                  {supplement.title}
                              </td>
                              <td>
                                  {supplement.desc}
                              </td>
                              <td>
                                  {supplement.price}
                              </td>
                              <td>
                                  <div className='btn-group'>
                                    <button onClick={()=>{
                                        add(supplement.id);
                                    }}>
                                        Add to Cart
                                    </button>
                                  </div>
                              </td>
                          </tr>
                      )
                    })
                )}
                </tbody>
                <tfoot>

                </tfoot>
            </table>)
            break;
        case Add:
            result = <div className='col-6'><SupplementForm/></div>
            break;

    }
    return (
        <Fragment>
            <div className="btn-group">
                <button className={`btn ${view === Supplements? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setView(Supplements);
                }}>Supplements</button>

                <button className={`btn ${view === Add? 'btn-primary': 'btn-secondary'}`}  onClick={()=>{
                    setView(Add);
                }}>Add Supplement</button>


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
        supplements: state.cart.supplements,

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [addSupplementToCart.type]: (item)=>{
            dispatch(addSupplementToCart(item));
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(SupplementMaintenance);
