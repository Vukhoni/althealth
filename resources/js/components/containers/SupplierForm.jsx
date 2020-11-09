import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // for everything
import { ScaleLoader } from "react-spinners";
import { addClient } from "../../clients";
import { loadReferences } from "../../reference";
import { connect } from "react-redux";

const SupplierForm = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>Add Supplier</h3>
            </div>
            <div className="card-body">
                <Formik
                    initialValues={{
                        [SupplierID]: "0",
                        [Contact]: "",

                        [Email]: "",

                        [Bank]: "",
                        [BankCode]: "",

                        [BankNumber]: "",
                        [AccountType]: ""
                    }}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    validationSchema={Yup.object({
                        [SupplierID]: Yup.string()
                            .max(
                                15,
                                `${[
                                    SupplierID
                                ]} cant be more than 15 characters`
                            )
                            .required(`${[SupplierID]} is required`),
                        [Contact]: Yup.string()
                            .max(
                                30,
                                `${[Contact]} cant be more than 30 characters`
                            )
                            .required(`${[Contact]} is required`),
                        [Telephone]: Yup.string()
                            .min(SATelLength, SATelLengthErrorMsg)
                            .max(SATelLength + 2, SATelLengthErrorMsg)
                            .matches(
                                new RegExp(SATelRegex),
                                SATelRegexErrorMsg
                            ),
                        [Email]: Yup.string()
                            .email()
                            .max(
                                200,
                                `${[Bank]} cant be more than 200 characters`
                            )
                            .required(`${[Email]} is required`),
                        [Bank]: Yup.string()
                            .max(
                                30,
                                `${[Bank]} cant be more than 30 characters`
                            )
                            .required(`${[Bank]} is required`),
                        [BankCode]: Yup.string()
                            .max(
                                10,
                                `${[BankCode]} cant be more than 10 characters`
                            )
                            .required(`${[BankCode]} is required`),
                        [BankNumber]: Yup.string()
                            .max(
                                30,
                                `${[
                                    BankNumber
                                ]} cant be more than 30 characters`
                            )
                            .required(`${[BankNumber]} is required`),
                        [AccountType]: Yup.string()
                            .max(
                                20,
                                `${[
                                    AccountType
                                ]} cant be more than 2 characters`
                            )
                            .required(`${[AccountType]} is required`)
                    })}
                >
                    <Form>
                        <Field
                            name={SupplierID}
                            id={SupplierID}
                            className="form-control"
                            type={"hidden"}
                        />
                        <ErrorMessage name={SupplierID} />
                        <div className="form-group">
                            <label htmlFor={Contact}>
                                Contact Person Full Name
                            </label>
                            <Field
                                name={Contact}
                                id={Contact}
                                className="form-control"
                            />
                            <ErrorMessage name={Contact} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Telephone}>Telephone</label>
                            <Field
                                name={Telephone}
                                id={Telephone}
                                className="form-control"
                            />
                            <ErrorMessage name={Telephone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Email}>Email</label>
                            <Field name={Email} className="form-control" />
                            <ErrorMessage name={Email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={Bank}>Bank</label>
                            <Field
                                name={Bank}
                                id={Bank}
                                className="form-control"
                            />
                            <ErrorMessage name={Bank} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={BankCode}>Bank Code</label>
                            <Field
                                name={BankCode}
                                id={BankCode}
                                className="form-control"
                            />
                            <ErrorMessage name={BankCode} />
                        </div>

                        <div className="form-group">
                            <label htmlFor={BankNumber}>Bank Number</label>
                            <Field
                                name={BankNumber}
                                id={BankNumber}
                                className="form-control"
                            />
                            <ErrorMessage name={BankNumber} />
                        </div>

                        <div className="form-group">
                            <label htmlFor={AccountType}>Account Type</label>
                            <Field
                                name={AccountType}
                                className="form-control"
                            />
                            <ErrorMessage
                                name={AccountType}
                                className="alert alert-danger"
                            />
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
export default connect(mapStateToProps, mapDispatchToProps)(SupplierForm);
