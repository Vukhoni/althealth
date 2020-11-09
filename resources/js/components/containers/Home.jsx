import React,{} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import {SignIn} from '../presentational/SignIn';
import SignUp from '../presentational/SignUp';
const Home = ({user})=>{
    const content = user? (<Box>
        <Paper>
        <Typography variant={'h1'}>
    Hello {user}
</Typography>
        </Paper>
    </Box>):(<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
            <SignIn handleSubmit={(values)=>{
                console.log(values)
            }} />
        </Grid>
        <Grid item container xs={12} md={2} alignContent={'center'} justify={'center'} direction={'column'}>
        <Typography variant={'h1'}>
    Or
</Typography>
        </Grid>
        <Grid item xs={12} md={5}>
            <SignUp />
        </Grid>

</Grid>)
    return content;
}


export default Home;
