import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import {connect} from "react-redux";
import { editSupplement,deleteSupplement, loadStock} from '../../stock';
import SupplementForm from '../presentational/SupplementForm'
import logo from '../../../images/logo.png'



const EditSupplement = (props)=>{
    const {user, supplements, [editSupplement.type]: edit, [loadStock.type]: load, [deleteSupplement.type]:remove} = props;
    let {id} = useParams();

    let item;
    useEffect(()=>{
        load();
    },[]);
    if(supplements.length > 0)
    {
        item = supplements.find((val, index)=>{
            return val.ID == id;
        });
    }
    if(item === undefined)
    {
        return <Typography>Selected Item not found</Typography>
    }
    return (<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <SupplementForm handleSubmit={(item)=>{
                edit(item)
            }} {...item} SupplementID={item.ID}/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={12} md={5}>
        <header className="App-header">

<Box m={2}>
<img src={logo} className="App-logo" alt="logo" />
<Typography variant={'body1'} color='primary'>
    Hello {user.name}, Please click the button below to remove this supplement
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
        supplements: state.stock.stock

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [editSupplement.type]: (item)=>{
            dispatch(editSupplement(item));
        },
        [deleteSupplement.type]: (item)=>{
            dispatch(deleteSupplement(item));
        },
        [loadStock.type]: ()=>{
            dispatch(loadStock());
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(EditSupplement);
