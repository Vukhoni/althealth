import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {ButtonGroup, Button, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../../images/logo.png'
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlineInput from '@material-ui/core/OutlinedInput';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {loadClients} from '../../clients'
import {setQuantity,removeFromCart} from '../../invoices'
import {connect} from 'react-redux';

const Cart = ({cart, user,clients,[loadClients.type]: load, [setQuantity.type]: setItemCount, [removeFromCart.type]:remove })=>{
    useEffect(()=>{
        load();
    },[]);

    let item;

    let totalAmount = 0;

    if(clients.length > 0)
    {
        item = clients.find((val, index)=>{
            return val.Email === user.email;
        });
    }
    if(item === undefined)
    {
        return <Typography>Selected Item not found</Typography>
    }
    else{
        //setComment(item.Comment);
        cart.forEach((supplement)=>{
            totalAmount += supplement.Price * supplement.Quantity;
        })

    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant='h2'>
                    Invoice
                </Typography>
            </Grid>
            <Grid container item xs={6} alignContent='flex-end' jus>
            <Avatar src={logo} variant='circle'>
                </Avatar>

            </Grid>
        <Grid container item xs={6} spacing={2}>
                <Grid item xs={12}>
                    <FormGroup>
                    <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Name
                        </InputLabel>
                        <OutlineInput value={item.Name} />
                    </FormControl>
                    </FormGroup>

                </Grid>
                <Grid item xs={12}>
                <FormGroup>
                    <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Surname
                        </InputLabel>
                        <OutlineInput value={item.Surname} />
                    </FormControl>
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                <FormGroup>
                    <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Email
                        </InputLabel>
                        <OutlineInput value={item.Email} />
                    </FormControl>
                    </FormGroup>

                </Grid>
            </Grid>
            <Divider variant='fullWidth' />
        <Grid container item xs={12} spacing={2}>
                <Grid item xs={6}>
                <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Invoice Date
                        </InputLabel>
                        <OutlineInput value={new Date()} />
                    </FormControl>
                </Grid>

            </Grid>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Cost Incl</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                        {
                            cart.map((invoice_item, index)=>{
                               return( <TableRow key={invoice_item.SupplementID}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{invoice_item.Description}</TableCell>
                                    <TableCell>
                                    <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>{
                                            setItemCount({...invoice_item, Quantity: invoice_item.Quantity -1})
                                    }} >
          <RemoveIcon />
        </IconButton>
                                        {invoice_item.Quantity}
                                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>{
                                            setItemCount({...invoice_item, Quantity: invoice_item.Quantity +1})
                                    }}>
          <AddIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>{
                                            remove(invoice_item)
                                    }}>
          <DeleteIcon />
        </IconButton>
                                        </TableCell>
                                    <TableCell>{invoice_item.Price}</TableCell>
                                    <TableCell>{invoice_item.Price * invoice_item.Quantity}</TableCell>
                            </TableRow>)
                            })
                        }
                        <TableRow>
                            <TableCell colSpan={4}>Total Due</TableCell>
                            <TableCell>{totalAmount}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Divider variant='fullWidth' />
            <Grid  item xs={12}>
                <Box m={'auto'}>
                <ButtonGroup>


                </ButtonGroup>
                </Box>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = state =>{

    return {
        cart: state.invoicing.cart,
        user: state.authentication,
        clients: state.clients.clients,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadClients.type]: ()=>{
            dispatch(loadClients());
        },
        [setQuantity.type]: (item)=>{
            dispatch(setQuantity(item));
        },
        [removeFromCart.type]: (item)=>{
            dispatch(removeFromCart(item));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
