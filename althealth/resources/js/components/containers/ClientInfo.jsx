import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import {connect} from "react-redux";
import { editClient,deleteClient, loadClients} from '../../clients';
import ClientForm from './ClientForm'
import logo from '../../../images/logo.png'



const EditClient = (props)=>{
    const {user, clients, [editClient.type]: edit, [loadClients.type]: load, [deleteClient.type]:remove} = props;
    let {id} = useParams();

    let item;
    useEffect(()=>{
        load();
    },[]);
    if(clients.length > 0)
    {
        item = clients.find((val, index)=>{
            return val.ID == id;
        });
    }
    if(item === undefined)
    {
        return <Typography>Selected Item not found</Typography>
    }
    return (<Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <ClientForm handleSubmit={(item)=>{
                edit({...item, ID: item.ClientID})
            }} {...item} />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={12} md={5}>
        <header className="App-header">

<Box m={2}>
<img src={logo} className="App-logo" alt="logo" />
<Typography variant={'body1'} color='primary'>
    Hello {user.name}, Please click the button below to remove this client
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
        clients: state.clients.clients

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        [editClient.type]: (item)=>{
            dispatch(editClient(item));
        },
        [deleteClient.type]: (item)=>{
            dispatch(deleteClient(item));
        },
        [loadClients.type]: ()=>{
            dispatch(loadClients());
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(EditClient);
