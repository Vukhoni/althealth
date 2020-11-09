import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import {connect} from "react-redux";
import { addSupplier} from '../../suppliers';
import SupplierForm from '../presentational/SupplierForm'
import logo from '../../../images/logo.png'



const AddSupplier = ({user,  [addSupplier.type]: add})=>{


    return (<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <header className="App-header">

        <Box m={2}>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant={'h5'} color='primary'>
    Hello {user.name}, Please complete the form to add a supplier
</Typography>

    </Box>
      </header>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={12} md={5}>
            <SupplierForm handleSubmit={(item)=>{
                add(item)
            }} />
        </Grid>
        </Grid>);
}


const mapStateToProps = state =>{

    return {
        user: state.authentication

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [addSupplier.type]: (item)=>{
            dispatch(addSupplier(item));
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(AddSupplier);
