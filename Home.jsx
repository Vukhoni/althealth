import React, {Fragment, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import {SignIn, SignUp} from 'althealth-react-components';
const Home =({user})=>{
    if(user)
    {
       return (<Typography>
        Hello {user.name} you are logged in
    </Typography>)
    }
    else
    {
        return (
            <Fragment>
                <Grid item xs={12} md={5}>
                    My sign in form here
                    {/* <SignIn></SignIn> */}
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography>
                        Or
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    My sign up form here
                    {/* <SignUp></SignUp> */}
                </Grid>
            </Fragment>
        )
    }

}
export default Home;
