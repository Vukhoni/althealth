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
                        <Field
                            name={SupplementID}
                            id={SupplementID}
                            className="form-control"
                            type={"hidden"}
                        />
                        <ErrorMessage name={SupplementID} />

                        <div className="form-group">
                            <label htmlFor={Description}>Description</label>
                            <Field
                                name={Description}
                                id={Description}
                                className="form-control"
                                as={"textarea"}
                            />
                            <ErrorMessage name={Description} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Cost}>Cost</label>
                            <Field
                                name={Cost}
                                id={Cost}
                                className="form-control"
                                onChange={e => {
                                    setCostInclusive(
                                        e.target.value * ((VAT + 100) / 100)
                                    );
                                }}
                            />
                            <ErrorMessage name={Cost} />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <span className="form-control disabled">
                                {costInclusive}
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor={MinLevel}>Min Level</label>
                            <Field name={MinLevel} className="form-control" />
                            <ErrorMessage name={MinLevel} />
                        </div>
                        <div>
                            <label htmlFor={CurrentLevel}>Current Level</label>
                            <Field
                                name={CurrentLevel}
                                id={CurrentLevel}
                                className="form-control"
                                as={"select"}
                            />
                            <ErrorMessage name={CurrentLevel} />
                        </div>
                        <div>
                            <label htmlFor={NappiCode}>Nappi Code</label>
                            <Field
                                name={NappiCode}
                                id={NappiCode}
                                className="form-control"
                                as={"select"}
                            />
                            <ErrorMessage name={NappiCode} />
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
