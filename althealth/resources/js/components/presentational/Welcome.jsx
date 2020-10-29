import React, { Fragment } from 'react'
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import {connect} from "react-redux";
import {useStyles} from '../../constants';
import logo from '../../../images/logo.png'
const Welcome = ({user})=>{
    const classes = useStyles()
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box m={2}>

        <Typography variant={'h1'} color='primary'>
    Hello {user.name}, Welcome to Alt Health
</Typography>

    </Box>
      </header>
    )
}
const mapStateToProps = state =>{

    return {
        user: state.authentication
    }
}
const mapDispatchToProps = dispatch =>{
    return {


    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(Welcome);

