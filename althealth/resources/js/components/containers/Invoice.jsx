import React, {Fragment, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {ButtonGroup, Button, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../../images/logo.png'
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlineInput from '@material-ui/core/OutlinedInput';
import InputAdorment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TextareaAutosize } from '@material-ui/core';
import {loadinvoices,updateInvoice} from '../../invoices'
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';

const Invoice = ({invoices, [loadinvoices.type]: load, [updateInvoice.type]: update })=>{
    useEffect(()=>{
        load();
    },[]);
    let {id} = useParams();
    let item;
    let markAsPaid = null;
    let totalAmount = 0;
    const [comment, setComment] = useState();
    if(invoices.length > 0)
    {
        item = invoices.find((val, index)=>{
            return val.InvoiceNumber == id;
        });
    }
    if(item === undefined)
    {
        return <Typography>Selected Item not found</Typography>
    }
    else{
        //setComment(item.Comment);
        item.Items.forEach((supplement)=>{
            totalAmount += supplement.Price * supplement.Quantity;
        })
        markAsPaid = String(item.IsPaid).trim() === 'Y'? null: <Button onClick={()=>{
            item.IsPaid === 'Y';
            update({...item, IsPaid: 'Y'});
        }}>Mark as paid</Button>
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
                        <OutlineInput value={item.ClientDetails.Name} />
                    </FormControl>
                    </FormGroup>

                </Grid>
                <Grid item xs={12}>
                <FormGroup>
                    <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Surname
                        </InputLabel>
                        <OutlineInput value={item.ClientDetails.Surname} />
                    </FormControl>
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                <FormGroup>
                    <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Email
                        </InputLabel>
                        <OutlineInput value={item.ClientDetails.Email} />
                    </FormControl>
                    </FormGroup>

                </Grid>
            </Grid>
            <Divider variant='fullWidth' />
        <Grid container item xs={12} spacing={2}>
                <Grid item xs={6}>
                    <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Invoice Number
                        </InputLabel>
                        <OutlineInput value={item.InvoiceNumber} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControl disabled fullWidth variant='outlined'>
                        <InputLabel>
                        Invoice Date
                        </InputLabel>
                        <OutlineInput value={item.Date} />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                <FormControlLabel
                        control={<Checkbox checked={String(item.IsPaid).trim() === 'Y'}  name="isPaid" />}
                        label="Invoice Paid" labelPlacement='start'
      />
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
                            item.Items.map((invoice_item, index)=>{
                               return( <TableRow key={invoice_item.SupplementID}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{invoice_item.Supplement.Description}</TableCell>
                                    <TableCell>{invoice_item.Quantity}</TableCell>
                                    <TableCell>{invoice_item.Price}</TableCell>
                                    <TableCell>{Number(invoice_item.Price * invoice_item.Quantity).toFixed(2)}</TableCell>
                            </TableRow>)
                            })
                        }
                        <TableRow>
                            <TableCell colSpan={4}>Total Due</TableCell>
                            <TableCell>{Number(totalAmount).toFixed(2)}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Divider variant='fullWidth' />
            <Grid item xs={12}>
                <TextareaAutosize rowsMin={6} value={comment || item.Comment} onChange={(evt)=>{
                    setComment(evt.target.value);
                }}>

                </TextareaAutosize>
            </Grid>
            <Divider variant='fullWidth' />
            <Grid  item xs={12}>
                <Box m={'auto'}>
                <ButtonGroup>
                    {markAsPaid}
                    <Button onClick={()=>{
                        update({...item, Comment: comment});
                    }}>Update Comment</Button>

                </ButtonGroup>
                </Box>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = state =>{

    return {
        invoices: state.invoicing.invoices
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [loadinvoices.type]: ()=>{
            dispatch(loadinvoices());
        },
        [updateInvoice.type]: (item)=>{
            dispatch(updateInvoice(item));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
