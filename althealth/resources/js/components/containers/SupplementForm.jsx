import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // for everything

import { addClient } from "../../clients";
import { loadReferences } from "../../reference";
import { connect } from "react-redux";

const SupplementForm = ({ [addClient.type]: createClient }) => {
    const [costInclusive, setCostInclusive] = useState(0);
    return (
        <div className="card">
            <div className="card-header">
                <h3>Add Supplement</h3>
            </div>
            <div className="card-body">
                <Formik
                    initialValues={{
                        [SupplementID]: "0",
                        [SupplierID]: "0",
                        [Description]: "",
                        [Cost]: 0,
                        [MinLevel]: 0,
                        [CurrentLevel]: 0,
                        [NappiCode]: ""
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    validationSchema={Yup.object({
                        [SupplementID]: Yup.string()
                            .max(
                                20,
                                `${[
                                    SupplementID
                                ]} cant be more than 20 characters`
                            )
                            .required(`${[SupplementID]} is required`),
                        [SupplierID]: Yup.string()
                            .max(
                                15,
                                `${[
                                    SupplierID
                                ]} cant be more than 15 characters`
                            )
                            .required(`${[SupplierID]} is required`),
                        [Description]: Yup.string()
                            .max(
                                30,
                                `${[
                                    Description
                                ]} cant be more than 30 characters`
                            )
                            .required(`${[Description]} is required`),
                        [Cost]: Yup.number().required(`${[Cost]} is required`),
                        [MinLevel]: Yup.number().required(
                            `${[MinLevel]} is required`
                        ),
                        [CurrentLevel]: Yup.number().required(
                            `${[CurrentLevel]} is required`
                        ),
                        [NappiCode]: Yup.string()
                            .max(
                                20,
                                `${[NappiCode]} cant be more than 20 characters`
                            )
                            .required(`${[NappiCode]} is required`)
                    })}
                >
                    <Form>
                    <Grid item xs={12}>
              <Field name={fields.SupplementID} id={fields.SupplementID}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    label='Supplement'
                    autoComplete={fields.SupplementID}
                  />
                )}
              </Field>
              <ErrorMessage name={fields.Description} />
            </Grid>
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
              <Field name={fields.Cost} id={fields.Cost}>
                {({ field, form: { touched, errors }, meta }) => (
                  <TextField
                    {...field}
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
              <Field name={fields.SupplierID} id={fields.SupplierID} >
                {({ field, form: { touched, errors }, meta }) => (
                  <FormControl variant={'outlined'} fullWidth required>
                    <InputLabel id="demo-simple-select-label">Reference</InputLabel>
                    <Select {...field}   autoComplete='reference-id' >
                      {options}
                    </Select>
                  </FormControl>
                )}
              </Field>
              <ErrorMessage name={fields.SupplierID} />
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
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        references: state.references,
        ui: state.ui
    };
};
const mapDispatchToProps = dispatch => {
    return {
        [addClient.type]: item => {
            dispatch(addClient(item));
        },
        [loadReferences.type]: () => {
            dispatch(loadReferences());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SupplementForm);
