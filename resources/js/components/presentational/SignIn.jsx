import React, { Fragment } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' // for everything
import * as althealth from 'althealth-package'
import logo from '../../../images/logo.png'

const {fields, validations,errorMessages} = althealth.default;
const useStyles = makeStyles((theme) => ({
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  facebook: {
    margin: theme.spacing(1)
  }
}))

const SignIn = ({ handleSubmit, email }) => {
    console.log(`Hello ${fields}`);
    const Remember = "Remember";
  const classes = useStyles()
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <Formik
        initialValues={{
          [fields.Email]: email,
          [fields.Password]: '',
          [Remember]: true
        }}
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
          <Field id={Remember} name={Remember}>
            {({ field, form: { touched, errors }, meter }) => (
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
            )}
          </Field>
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
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  )
}
const SignInSide = ({ handleSubmit, email }) => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Welcome to Alt Health</p>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <SignIn handleSubmit={handleSubmit} email={email} />
      </Grid>
    </>
  )
}
export default SignIn
export { SignInSide, SignIn }
