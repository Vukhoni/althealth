import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {loadStock} from '../../stock';
import {addToCart} from '../../invoices';
import * as althealth from '../../constants';
import {connect} from "react-redux";
import 'react-data-grid/dist/react-data-grid.css';
const {fields} = althealth.default;



const Shop = ({supplements,  [loadStock.type]: load, [addToCart.type]: buy}) =>{
    useEffect(()=>{
        load();
    },[]);


    return (
        <Grid container spacing={2}>
            {supplements.map((supplement)=>{
              return  (
                    <Grid item xs={4} sm={3} md={2} >
                        <Card  variant="outlined">
                            <CardContent>
                                <Typography  color="textSecondary" gutterBottom>
                                    {supplement.Description}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {supplement.Price}
                                </Typography>
                                <Typography  color="textSecondary">
                                    {supplement.NappiCode}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    onClick={()=>{
                                                buy(supplement);
                                }}>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )

            }

    )}
    </Grid>)
}

const mapStateToProps = state =>{

    return {
        supplements: state.stock.stock
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadStock.type]: ()=>{
            dispatch(loadStock());
        },
        [addToCart.type]: (item)=>{
            dispatch(addToCart(item));
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Shop);
