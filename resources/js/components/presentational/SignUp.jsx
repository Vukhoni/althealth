import React, { Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { TextField } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import * as Yup from 'yup' // for everything
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as althealth from 'althealth-package';
const {fields, validations,errorMessages} = althealth.default;
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const SignUp = ({ handleSubmit }) => {
  const classes = useStyles()

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
            [fields.Password]: ''
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
              .test('Luhn', errorMessages.ClientIDLuhnFailureMsg, function (
                value
              ) {
                const { path, createError } = this
                let nDigits = 0
                if (value) {
                  nDigits = value.length
                }

                let nSum = 0
                let isSecond = false
                for (let i = nDigits - 1; i >= 0; i--) {
                  let d = value[i] - '0'

                  if (isSecond == true) d = d * 2

                  // We add two digits to handle
                  // cases that make two digits
                  // after doubling
                  nSum += d / 10
                  nSum += d % 10

                  isSecond = !isSecond
                }
                return (
                  nSum % 10 == 0 ||
                  createError({
                    path,
                    message: errorMessages.ClientIDLuhnFailureMsg
                  })
                )
              })
              .required(`${fields.ClientID} is required`),
            [fields.Email]: Yup.string()
              .email()
              .max(
                validations.EmailLength,
                `${fields.Email} cant be more than ${validations.EmailLength} characters`
              )
              .required(`${fields.Email} is required`),
            [fields.Password]: Yup.string()
              .min(validations.PasswordMinLength)
              .max(
                validations.PasswordLength,
                `${fields.Password} cant be more than ${validations.PasswordLength} characters`
              )
              .required(`${fields.Password} is required`)
          })}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field name={fields.Name} id={fields.Name}>
                  {({ field, form: { touched, errors }, meta }) => (
                    <TextField
                      {...field}
                      autoComplete='fname'
                      variant='outlined'
                      required
                      fullWidth
                      label='First Name'

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
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
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

export default SignUp
