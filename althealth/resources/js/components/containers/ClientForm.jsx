import React, { Fragment, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FormControl, MenuItem, TextField } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {Link as RouterLink} from 'react-router-dom';
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
import {editClient} from '../../clients';
const {fields, validations,errorMessages} = althealth.default;


const ClientForm = ({handleSubmit, ID, Name, Surname, Address, Code, Telephone,Cellphone, Workphone, Email ,ReferenceID,references,[loadReferences.type]: load }) => {
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
          Profile
        </Typography>
        <Formik
          initialValues={{
            [fields.Name]: Name,
            [fields.Surname]: Surname,
            [fields.Email]: Email,
            [fields.ClientID]: ID,
            [fields.Address]: Address,
            [fields.Code]: Code,
            [fields.Telephone]: Telephone,
            [fields.Cellphone]: Cellphone,
            [fields.Workphone]: Workphone,
            [fields.ReferenceID]: ReferenceID,

          }}
          onSubmit={handleSubmit}
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
              .required(`${fields.Code} is required`),
              [fields.Cellphone]: Yup.string()
                    .min(validations.SATelLength, errorMessages.SATelLengthErrorMsg)
                    .max(validations.SATelLength + 8, errorMessages.SATelLengthErrorMsg)
                    .matches(
                        new RegExp(validations.SATelRegex),
                        errorMessages.SATelRegexErrorMsg
                    ).nullable(),
              [fields.Telephone]: Yup.string()
                    .min(validations.SATelLength, errorMessages.SATelLengthErrorMsg)
                    .max(validations.SATelLength + 8, errorMessages.SATelLengthErrorMsg)
                    .matches(
                        new RegExp(validations.SATelRegex),
                        errorMessages.SATelRegexErrorMsg
                    ).nullable(),
            [fields.Workphone]: Yup.string()
                    .min(validations.SATelLength, errorMessages.SATelLengthErrorMsg)
                    .max(validations.SATelLength + 8, errorMessages.SATelLengthErrorMsg)
                    .matches(
                        new RegExp(validations.SATelRegex),
                        errorMessages.SATelRegexErrorMsg
                    ).nullable(),
              [fields.ReferenceID]: Yup.number()
              .required(`${fields.ReferenceID} is required`)

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
                    disabled
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
                <Field name={fields.Telephone} id={fields.Telephone}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'

                      fullWidth
                      label='Telephone'
                      autoComplete={fields.Telephone}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Telephone} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.Cellphone} id={fields.Cellphone}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'

                      fullWidth
                      label='Cellphone'
                      autoComplete={fields.Cellphone}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Cellphone} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.Workphone} id={fields.Workphone}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'

                      fullWidth
                      label='Workphone'
                      autoComplete={fields.Workphone}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Workphone} />
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

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Update
            </Button>
          </Form>
        </Formik>
      </div>
    </Fragment>
  )
}
const mapStateToProps = state =>{

    return {

        references: state.references
    }
}
const mapDispatchToProps = dispatch =>{
    return {

        [loadReferences.type]:()=>{
            dispatch(loadReferences());
        }
    }
}
export  default  connect(mapStateToProps, mapDispatchToProps)(ClientForm);

