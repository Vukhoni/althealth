import React, { Fragment, useEffect,useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem, TextField } from '@material-ui/core'
import {useStyles} from '../../constants';
import * as Yup from 'yup' // for everything
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {loadSuppliers} from '../../suppliers';
import {connect} from "react-redux";
import * as althealth from '../../constants'
const {fields, validations,errorMessages} = althealth.default;



const SupplementForm = ({handleSubmit, suppliers, [loadSuppliers.type]: load ,SupplementID, SupplierID, Description, Cost,MinLevel, CurrentLevel, NappiCode }) => {
    const classes = useStyles();
    useEffect(()=>{
        load();
    },[]);
    const [costInclusive, setCostInclusive] = useState(Cost && Number(Cost) + (Number(Cost) * althealth.VAT));
    const options = suppliers && suppliers.map(({ID})=>{
        return <MenuItem value={ID} key={ID}>{ID}</MenuItem>
        });

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.paper}>

          <Typography component='h1' variant='h5' gutterBottom>
            Supplement Form
          </Typography>
          <Formik

            initialValues={{
                [fields.SupplementID]: SupplementID,
                [fields.SupplierID]: SupplierID,
                [fields.Description]: Description,
                [fields.Cost]: Cost,
                [fields.MinLevel]: MinLevel,
                [fields.CurrentLevel]: CurrentLevel,
                [fields.NappiCode]: NappiCode
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                [fields.SupplementID]: Yup.string()
                    .max(
                        20,
                        `${[
                            fields.SupplementID
                        ]} cant be more than 20 characters`
                    ),

                [fields.SupplierID]: Yup.string()
                    .max(
                        15,
                        `${[
                            fields.SupplierID
                        ]} cant be more than 15 characters`
                    )
                    .required(`${[fields.SupplierID]} is required`),
                [fields.Description]: Yup.string()
                    .max(
                        30,
                        `${[
                            fields.Description
                        ]} cant be more than 30 characters`
                    )
                    .required(`${[fields.Description]} is required`),
                [fields.Cost]: Yup.number('Please provide a numeric value').required(`${[fields.Cost]} is required`),
                [fields.MinLevel]: Yup.number('Please provide a numeric value').required(
                    `${[fields.MinLevel]} is required`
                ),
                [fields.CurrentLevel]: Yup.number('Please provide a numeric value').required(
                    `${[fields.CurrentLevel]} is required`
                ),
                [fields.NappiCode]: Yup.string()
                    .max(
                        20,
                        `${[fields.NappiCode]} cant be more than 20 characters`
                    )
                    .required(`${[fields.NappiCode]} is required`)
            })}
          >
                      <Form>

            <Grid item xs={12}>
              <Field name={fields.Description} id={fields.Description}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Description'
                    autoComplete={fields.Description}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.Description} />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.Cost} id={fields.Cost} >
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    onChange={(evt)=>{
                        if (evt.target.value)
                        {
                            setCostInclusive(Number(evt.target.value) + (Number(evt.target.value) * althealth.VAT));
                            field.onChange(evt);
                        }
                    }}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Cost'
                    autoComplete={fields.Cost}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.Cost} />
            </Grid>
            <Grid item xs={12}>
            <TextField
                    disabled
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Price'
                    value ={costInclusive}
                  />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.MinLevel} id={fields.MinLevel}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Minimum Level'
                    autoComplete={fields.MinLevel}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.MinLevel} />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.CurrentLevel} id={fields.CurrentLevel}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required

                    label='Current Level'
                    autoComplete={fields.CurrentLevel}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.CurrentLevel} />
            </Grid>
            <Grid item xs={12}>
              <Field name={fields.SupplierID} id={fields.SupplierID} >
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl variant={'outlined'} fullWidth required>
                    <InputLabel id="demo-simple-select-label">Supplier</InputLabel>
                    <Select {...field}   autoComplete='supplier-id' >
                      {options}
                    </Select>
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name={fields.SupplierID} />
            </Grid>

            <Grid item xs={12}>
              <Field name={fields.NappiCode} id={fields.NappiCode}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Nappi Code'
                    type='text'
                    autoComplete={NappiCode}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.NappiCode} />
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

  const mapStateToProps = state =>{

    return {
        suppliers: state.suppliers
    }
}
const mapDispatchToProps = dispatch =>{
    return {

        [loadSuppliers.type]:()=>{
            dispatch(loadSuppliers());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SupplementForm);
