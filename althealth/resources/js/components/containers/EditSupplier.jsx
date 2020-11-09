import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import {connect} from "react-redux";
import {loadSuppliers, editSupplier, deleteSupplier} from '../../suppliers';
import SupplierForm from '../presentational/SupplierForm'
import logo from '../../../images/logo.png'



const EditSupplier = (props)=>{
    const {user,  suppliers,[editSupplier.type]: edit, [loadSuppliers.type]: load, [deleteSupplier.type]: remove} = props;
    let {id} = useParams();

    let item;
    useEffect(()=>{
        load();
    },[]);
    if(suppliers.length > 0)
    {
        item = suppliers.find((val, index)=>{
            return val.ID == id;
        });
    }
    if(item === undefined)
    {
        return <Typography>Selected Item not found</Typography>
    }
    return (<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <SupplierForm handleSubmit={(item)=>{
                edit(item)
            }} {...item} SupplierID={item.ID} />

        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={12} md={5}>
        <header className="App-header">

<Box m={2}>
<img src={logo} className="App-logo" alt="logo" />
<Typography variant={'body1'} color='primary'>
    Hello {user.name}, Please click the button below to remove this supplier
</Typography>
            <Button onClick={()=>{
                remove(item);
            }}>Delete</Button>
</Box>
</header>
        </Grid>
        </Grid>);
}


const mapStateToProps = state =>{

    return {
        user: state.authentication,
        suppliers: state.suppliers

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [editSupplier.type]: (item)=>{
            dispatch(editSupplier(item));
        },
        [loadSuppliers.type]: ()=>{
            dispatch(loadSuppliers())
        },
        [deleteSupplier.type]: (item)=>{
            dispatch(deleteSupplier(item));
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(EditSupplier);
