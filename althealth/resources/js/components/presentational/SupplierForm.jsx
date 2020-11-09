import React, { Fragment, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {useStyles} from '../../constants';
import * as Yup from 'yup' // for everything
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as althealth from '../../constants'
const {fields, validations,errorMessages} = althealth.default;

const SupplierForm = ({handleSubmit, SupplierID, Contact, Email, Telephone,Bank, BankCode, BankNumber, AccountType }) => {
    const classes = useStyles();


    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.paper}>

          <Typography component='h1' variant='h5' gutterBottom>
            Supplier Form
          </Typography>
          <Formik
            initialValues={{
                [fields.SupplierID]: SupplierID,
                [fields.Contact]: Contact,

                [fields.Email]: Email,
                [fields.Telephone]: Telephone,
                [fields.Bank]: Bank,
                [fields.BankCode]: BankCode,

                [fields.BankNumber]: BankNumber,
                [fields.AccountType]: AccountType
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                [fields.SupplierID]: Yup.string()
                    .max(
                        15,
                        `${[
                            fields.SupplierID
                        ]} cant be more than 15 characters`
                    )
                    .required(`${[fields.SupplierID]} is required`),
                [fields.Contact]: Yup.string()
                    .max(
                        30,
                        `${[fields.Contact]} cant be more than 30 characters`
                    )
                    .required(`${[fields.Contact]} is required`),
                [fields.Telephone]: Yup.string()
                    .min(validations.SATelLength, errorMessages.SATelLengthErrorMsg)
                    .max(validations.SATelLength + 8, errorMessages.SATelLengthErrorMsg)
                    .matches(
                        new RegExp(validations.SATelRegex),
                        errorMessages.SATelRegexErrorMsg
                    ),
                [fields.Email]: Yup.string()
                    .email()
                    .max(
                        50,
                        `${[fields.Email]} cant be more than 50 characters`
                    )
                    .required(`${[fields.Email]} is required`),
                [fields.Bank]: Yup.string()
                    .max(
                        30,
                        `${[fields.Bank]} cant be more than 30 characters`
                    )
                    .required(`${[fields.Bank]} is required`),
                [fields.BankCode]: Yup.string()
                    .max(
                        10,
                        `${[fields.BankCode]} cant be more than 10 characters`
                    )
                    .required(`${[fields.BankCode]} is required`),
                [fields.BankNumber]: Yup.string()
                    .max(
                        30,
                        `${[
                            fields.BankNumber
                        ]} cant be more than 30 characters`
                    )
                    .required(`${[fields.BankNumber]} is required`),
                [fields.AccountType]: Yup.string()
                    .max(
                        20,
                        `${[
                            fields.AccountType
                        ]} cant be more than 20 characters`
                    )
                    .required(`${[fields.AccountType]} is required`)
            })}
          >
            <Form>
            <Grid item xs={12}>

                <Field name={fields.SupplierID} id={fields.SupplierID}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      label='Supplier ID'
                      autoComplete={fields.SupplierID}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Contact} />
              </Grid>

              <Grid item xs={12}>

                <Field name={fields.Contact} id={fields.Contact}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      label='Contact Full Names'
                      autoComplete={fields.Contact}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Contact} />
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
                      label='Email'
                      autoComplete={fields.Email}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Email} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.Telephone} id={fields.Telephone}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      label='Telephone'
                      autoComplete={fields.Telephone}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Telephone} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.Bank} id={fields.Bank}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required
                      fullWidth
                      label='Bank'
                      autoComplete={fields.Bank}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.Bank} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.BankCode} id={fields.BankCode}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required

                      label='Bank Code'
                      autoComplete={fields.BankCode}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.BankCode} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.BankNumber} id={fields.BankNumber}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required

                      label='Bank Number'
                      autoComplete={fields.BankNumber}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.BankNumber} />
              </Grid>
              <Grid item xs={12}>
                <Field name={fields.AccountType} id={fields.AccountType}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      variant='outlined'
                      margin='normal'
                      required

                      label='Account Type'
                      autoComplete={fields.AccountType}
                    />
                  )}
                </Field>
                <ErrorMessage name={fields.AccountType} />
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Save
              </Button>
            </Form>
          </Formik>
        </div>
      </Fragment>
    )
  }
export default SupplierForm;
