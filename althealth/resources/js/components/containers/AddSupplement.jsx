import React,{} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import {connect} from "react-redux";
import { addSupplement} from '../../stock';
import SupplementForm from '../presentational/SupplementForm'
import logo from '../../../images/logo.png'



const AddSupplement = (props)=>{
    const {user,  [addSupplement.type]: add} = props;

    return (<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <header className="App-header">

        <Box m={2}>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant={'h5'} color='primary'>
    Hello {user.name}, Please complete the form to add a supplement
</Typography>

    </Box>
      </header>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={12} md={5}>
            <SupplementForm handleSubmit={(item)=>{
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
        [addSupplement.type]: (item)=>{
            dispatch(addSupplement(item));
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(AddSupplement);
