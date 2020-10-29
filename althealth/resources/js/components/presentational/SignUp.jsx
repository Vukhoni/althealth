import React, { Fragment, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FormControl, MenuItem, TextField } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography'
import {useStyles} from '../../constants';
import * as Yup from 'yup' // for everything
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {connect} from "react-redux";

import * as althealth from '../../constants'
import {loadReferences} from '../../reference';
import {register} from '../../au';
const {fields, validations,errorMessages} = althealth.default;


const SignUp = ({ [register.type]: createAccount, references,[loadReferences.type]: load }) => {
  const classes = useStyles();
  useEffect(()=>{
    load();
  }, [])
  const options = references && references.map(({ID, Description})=>{
  return <MenuItem value={ID} key={ID}>{Description}</MenuItem>
  });
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' gutterBottom>
          Sign up
        </Typography>
        <Formik
          initialValues={{
            [fields.Name]: '',
            [fields.Surname]: '',
            [fields.Email]: '',
            [fields.ClientID]: '',
            [fields.Address]: '',
            [fields.Code]: '',
            [fields.Password]: '',
            [fields.ReferenceID]: '',
            password_confirmation: ''
          }}
          onSubmit={createAccount}
          validationSchema={Yup.object({
            [fields.Name]: Yup.string()
              .max(
                validations.NameLength,
                `Name cant be more than ${validations.NameLength} characters`
              )
              .required(`Name is required`),
            [fields.Surname]: Yup.string()
              .max(
                validations.SurnameLength,
                `Last Name cant be more than ${validations.SurnameLength} characters`
              )
              .required(`Last Name is required`),
            [fields.ClientID]: Yup.string()
              .matches(
                new RegExp(validations.SAIDRegex),
                errorMessages.SATelRegexErrorMsg
              )
              .min(validations.SAIDLength, errorMessages.SAIDLengthErrorMsg)
              .max(validations.SAIDLength, errorMessages.SAIDLengthErrorMsg)
              .test('Luhn', errorMessages.ClientIDLuhnFailureMsg, function (
                value
              ) {
                const { path, createError } = this
                let nDigits = 0
                let tempTotal = 0;
                let checkSum = 0;
                let multiplier = 1;
                if (value) {
                  nDigits = value.length;
                  for (var i = 0; i < nDigits; ++i) {
                    tempTotal = parseInt(value.charAt(i)) * multiplier;
                    if (tempTotal > 9) {
                        tempTotal = parseInt(tempTotal.toString().charAt(0)) + parseInt(tempTotal.toString().charAt(1));
                    }
                    checkSum = checkSum + tempTotal;
                    multiplier = (multiplier % 2 == 0) ? 1 : 2;
                    }
                    return (
                        (checkSum % 10) == 0 ||
                      createError({
                        path,
                        message: errorMessages.ClientIDLuhnFailureMsg
                      })
                    )
                }

                return createError({
                    path,
                    message: errorMessages.ClientIDLuhnFailureMsg
                  })
              })
              .required(`${fields.ClientID} is required`),
            [fields.Email]: Yup.string()
              .email()
              .max(
                validations.EmailLength,
                `${fields.Email} cant be more than ${validations.EmailLength} characters`
              )
              .required(`${fields.Email} is required`),
              [fields.Address]: Yup.string()
              .max(
                validations.AddressLength,
                `${fields.Address} cant be more than ${validations.AddressLength} characters`
              )
              .required(`${fields.Address} is required`),
              [fields.Code]: Yup.string()
              .min(
                validations.CodeLength,
                `${fields.Code} cant be less than ${validations.CodeLength} characters`
              )
              .max(
                validations.CodeLength,
                `${fields.Code} cant be more than ${validations.CodeLength} characters`
              )
              .required(`${fields.Email} is required`),
              [fields.ReferenceID]: Yup.number()
              .required(`${fields.ReferenceID} is required`),
            [fields.Password]: Yup.string()
              .min(validations.PasswordMinLength,
                `${fields.Password} cant be less than ${validations.PasswordMinLength} characters`)
              .max(
                validations.PasswordLength,
                `${fields.Password} cant be more than ${validations.PasswordLength} characters`
              )
              .required(`${fields.Password} is required`),
              password_confirmation: Yup.string().when(fields.Password, {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref(fields.Password)],
                  "Both password need to be the same"
                )
              })
          })}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field name={fields.Name} id={fields.Name} >
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Name'
                    autoComplete={fields.Name}
                  />
                  )}
                </Field>
                <ErrorMessage name={fields.Name} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field id={fields.Surname} name={fields.Surname}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      label='Last Name'
                      autoComplete='lname'
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Surname} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.ClientID} id={fields.ClientID}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='SA Identity Number'
                    autoComplete={fields.ClientID}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.ClientID} />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.Address} id={fields.Address}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Address'
                    autoComplete={fields.Address}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.Address} />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.Code} id={fields.Code}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required

                    label='Code'
                    autoComplete={fields.Code}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.Code} />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.ReferenceID} id={fields.ReferenceID} >
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl variant={'outlined'} fullWidth required>
                    <InputLabel id="demo-simple-select-label">Reference</InputLabel>
                    <Select {...field}   autoComplete='reference-id' >
                      {options}
                    </Select>
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name={fields.ReferenceID} />
            </Grid>

            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <Field name={'password_confirmation'} id={'password_confirmation'}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Confirm Password'
                    type='password'
                    autoComplete='current-password'
                  />
                )}
              </Field>
              <ErrorMessage name={'password_confirmation'} />
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
          </Form>
        </Formik>

        <Grid container justify='flex-end'>
          <Grid item>
            <Link href='#' variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}
const mapStateToProps = state =>{

    return {
        user: state.authentication,
        references: state.references,
        ui: state.ui,
    }
}
const mapDispatchToProps = dispatch =>{
    return {

        [loadReferences.type]:()=>{
            dispatch(loadReferences());
        },
        [register.type]: (item)=>{
            dispatch(register(item))
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(SignUp);

