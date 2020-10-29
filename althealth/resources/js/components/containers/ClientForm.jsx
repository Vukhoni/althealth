import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // for everything
import { ScaleLoader } from "react-spinners";
import { addClient } from "../../clients";
import { loadReferences } from "../../reference";
import { connect } from "react-redux";

const ClientForm = ({
    references,
    ui,
    [addClient.type]: createClient,
    load
}) => {
    useEffect(() => {
        load();
    }, []);
    if (ui.loading.references && ui.loading.references) return <ScaleLoader />;
    return (
        <div className="card">
            <div className="card-header">
                <h3>Add Client</h3>
            </div>
            <div className="card-body">
                <Formik
                    initialValues={{
                        [ClientID]: "",
                        [Telephone]: "",
                        [Cellphone]: "",
                        [Email]: "",
                        [ReferenceID]: 0,
                        [Name]: "",
                        [Surname]: "",
                        [Code]: 0,
                        [Address]: "",
                        [Workphone]: ""
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    validationSchema={Yup.object({
                        [ClientID]: Yup.number()
                            .min(SAID, SAIDLengthErrorMsg)
                            .max(SAID, SAIDLengthErrorMsg)
                            .test("Luhn", ClientIDLuhnFailureMsg, function(
                                value
                            ) {
                                const { path, createError } = this;
                                let nDigits = 0;
                                if (value) {
                                    nDigits = value.length;
                                }

                                let nSum = 0;
                                let isSecond = false;
                                for (let i = nDigits - 1; i >= 0; i--) {
                                    let d = value[i] - "0";

                                    if (isSecond == true) d = d * 2;

                                    // We add two digits to handle
                                    // cases that make two digits
                                    // after doubling
                                    nSum += d / 10;
                                    nSum += d % 10;

                                    isSecond = !isSecond;
                                }
                                return (
                                    nSum % 10 == 0 ||
                                    createError({
                                        path,
                                        message: ClientIDLuhnFailureMsg
                                    })
                                );
                            })
                            .required(`${[ClientID]} is required`),
                        [Telephone]: Yup.string()
                            .min(SATelLength, SATelLengthErrorMsg)
                            .max(SATelLength + 2, SATelLengthErrorMsg)
                            .matches(
                                new RegExp(SATelRegex),
                                SATelRegexErrorMsg
                            ),
                        [Cellphone]: Yup.string()
                            .min(SATelLength, SATelLengthErrorMsg)
                            .max(SATelLength + 2, SATelLengthErrorMsg)
                            .matches(new RegExp(SATelRegex), SATelRegexErrorMsg)
                            .required(`${[Cellphone]} is required`),
                        [Email]: Yup.string()
                            .email()
                            .max(
                                200,
                                `${[Email]} cant be more than 30 characters`
                            )
                            .required(`${[Email]} is required`),
                        [ReferenceID]: Yup.number()
                            .oneOf(
                                references.map(ref => {
                                    return ref.ID;
                                }),
                                "Please select predetermined values"
                            )
                            .required(`${[ReferenceID]} is required`),
                        [Name]: Yup.string()
                            .min(3, `${[Name]} must be atleast 3 characters`)
                            .max(
                                30,
                                `${[Name]} cant be more than 30 characters`
                            )
                            .required(`${[Name]} is required`),
                        [Surname]: Yup.string()
                            .min(3, `${[Surname]} must be atleast 3 characters`)
                            .max(
                                50,
                                `${[Surname]} cant be more than 50 characters`
                            )
                            .required(`${[Surname]} is required`),
                        [Code]: Yup.number()
                            .min(4, `${[Code]} must be 4 characters`)
                            .max(4, `${[Code]} must be 4 characters`)
                            .required(`${[Code]} is required`),
                        [Address]: Yup.string()
                            .min(
                                20,
                                `${[Address]} must be atleast 20 characters`
                            )
                            .max(
                                200,
                                `${[Address]} cant be more than 200 characters`
                            )
                            .required(`${[Address]} is required`),
                        [Workphone]: Yup.string()
                            .min(SATelLength, SATelLengthErrorMsg)
                            .max(SATelLength + 2, SATelLengthErrorMsg)
                            .matches(new RegExp(SATelRegex), SATelRegexErrorMsg)
                            .required(`${[Workphone]} is required`)
                    })}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor={Name}>First Name</label>
                            <Field
                                name={Name}
                                id={Name}
                                className="form-control"
                            />
                            <ErrorMessage name={Name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Surname}>Last Name</label>
                            <Field
                                name={Surname}
                                id={Surname}
                                className="form-control"
                            />
                            <ErrorMessage name={Surname} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={ClientID}>SA ID</label>
                            <Field
                                name={ClientID}
                                id={ClientID}
                                className="form-control"
                            />
                            <ErrorMessage name={ClientID} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Cellphone}>Cellphone</label>
                            <Field
                                name={Cellphone}
                                id={Cellphone}
                                className="form-control"
                            />
                            <ErrorMessage name={Cellphone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Telephone}>Telephone: H</label>
                            <Field
                                name={Telephone}
                                id={Telephone}
                                className="form-control"
                            />
                            <ErrorMessage name={Telephone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Workphone}>Telephone: W</label>
                            <Field
                                name={Workphone}
                                id={Workphone}
                                className="form-control"
                            />
                            <ErrorMessage name={Workphone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Email}>Email</label>
                            <Field name={Email} className="form-control" />
                            <ErrorMessage name={Email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Address}>Address</label>
                            <Field
                                name={Address}
                                as={"textarea"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name={Address}
                                className="alert alert-danger"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Code}>Code</label>
                            <Field name={Code} className="form-control" />
                            <ErrorMessage name={Code} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={ReferenceID}>Email</label>
                            <Field
                                name={ReferenceID}
                                id={ReferenceID}
                                as="select"
                                className="form-control"
                            >
                                {references.map(reference => {
                                    return (
                                        <option
                                            key={reference.ID}
                                            value={reference.ID}
                                        >
                                            {reference.Description}
                                        </option>
                                    );
                                })}
                            </Field>
                            <ErrorMessage name={ReferenceID} />
                        </div>
                        <div className="btn-group w-100">
                            <button
                                type="submit"
                                className="btn btn-primary w-50"
                            >
                                Save
                            </button>
                            <button
                                type="reset"
                                className="btn btn-warning w-50"
                            >
                                Reset
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default ClientForm;
