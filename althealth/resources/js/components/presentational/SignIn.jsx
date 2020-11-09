import React, { Fragment, useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import {useStyles} from '../../constants';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' // for everything
import * as althealth from '../../constants'
import logo from '../../../images/logo.png'
import {connect} from "react-redux";
import {login} from '../../au';
const {fields} = althealth.default;


const SignIn = ({ handleSubmit }) => {

  const classes = useStyles()
  let initValues = {
    [fields.Email]: '',
    [fields.Password]: ''

  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <Formik
        initialValues={{...initValues}}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          [fields.Email]: Yup.string()
            .email()
            .max(200, `${fields.Email} cant be more than 200 characters`)
            .required(`${fields.Email} is required`),
          [fields.Password]: Yup.string()
            .min(8)
            .max(15, `${fields.Password} cant be more than 15 characters`)
            .required(`${fields.Password} is required`)
        })}
      >
        <Form className={classes.form}>
          <Field name={fields.Email} id={fields.Email}>
            {({ field, form: { touched, errors }, meta }) => (
              <TextField
                {...field}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Email Address'
                autoComplete={fields.Email}

              />
            )}
          </Field>
          <ErrorMessage name={fields.Email} />
          <Field name={fields.Password} id={fields.Password}>
            {({ field, form: { touched, errors }, meta }) => (
              <TextField
                {...field}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Password'
                type='password'
                autoComplete='current-password'
              />
            )}
          </Field>
          <ErrorMessage name={fields.Password} />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>

            <Grid item>
            <Link component={RouterLink} to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  )
}
const mapStateToProps = state =>{

    return {
        user : state.authentication
    }
}
const mapDispatchToProps = dispatch =>{
    return {

        [login.type]: (item)=>{
            dispatch(login(item));
        }

    }
}
const SignInSide =connect(mapStateToProps,mapDispatchToProps)(({ [login.type]: handleSubmit, user }) => {
    const classes = useStyles();
    let history = useHistory();
    if(user)
        {
            history.push('/');
        }
    return (
      <Grid container>
        <Grid item container xs={false} sm={4} md={7} alignContent={'center'}>
          <img src={logo} className='App-logo' alt='logo' />

          <Typography variant={'h1'} color='primary'>
    Welcome to Alt Health
</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <SignIn handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    )
  })


export default SignIn
export { SignInSide, SignIn }

