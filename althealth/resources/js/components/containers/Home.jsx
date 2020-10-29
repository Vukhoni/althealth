import React,{} from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import {SignIn} from '../presentational/SignIn';
import SignUp from '../presentational/SignUp';
import Welcome from '../presentational/Welcome';

import {login, register, logout} from '../../au';

const Home = (props)=>{
    const {user,  [login.type]: authenticate} = props;
    const content = user? (<Welcome />):(<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
            <SignIn handleSubmit={authenticate} />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} md={5}>
            <SignUp  />
        </Grid>

        </Grid>)
    return content;
}


const mapStateToProps = state =>{

    return {
        user: state.authentication,
        ui: state.ui,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [register.type]: (item)=>{
            dispatch(register(item));
        },
        [login.type]: (item)=>{
            dispatch(login(item));
        }

    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(Home);
