import React from 'react';
import {Formik, Form,Field} from 'formik'
import Yup from 'yup';

const ClientID="ClientID";
const ClientIDLuhnFailureMsg = `${ClientID} is invalid SA Identity Number`;
const Telephone ='Telephone';
const Cellphone= 'Cellphone';
const Email='Email';
const ReferenceID = 'ReferenceID';
const SAID = 13;
const SATelLength = 10
const ClientForm = ({references,ui,addClient})=>{
    if (ui.loading.references && ui.loading.references)
        return 
    return(
        <Formik
            initialValues={{
                [ClientID]: "",
                [Telephone]:"",
                [Cellphone]: "",
                [Email]: "",
                [ReferenceID]:0
            }}
            onSubmit={(value,{setSubmitting,resetForm}) =>{
                setSubmitting(true);
                addClient(value);
            }}
            validationSchema={
                Yup.object({
                    [ClientID]: Yup.string().min(SAID).max(SAID).test('Luhn',ClientIDLuhnFailureMsg,function (value){
                        const { path, createError } = this;
                        let nDigits = value.length;

                        let nSum = 0;
                        let isSecond = false;
                        for (let i = nDigits - 1; i >= 0; i--)
                        {

                            let d = value[i] - '0';

                            if (isSecond == true)
                                d = d * 2;

                            // We add two digits to handle
                            // cases that make two digits
                            // after doubling
                            nSum += d / 10;
                            nSum += d % 10;

                            isSecond = !isSecond;
                        }
                        return (nSum % 10 == 0) || createError({ path, message: ClientIDLuhnFailureMsg });
                    }).required(),
                    [Telephone]: Yup.string().min(SATelLength).max(SATelLength),
                    [Cellphone]: Yup.string().min(SATelLength).map(SATelLength).required(),
                    [Email]:Yup.string().email().required(),
                    [ReferenceID]: Yup.number().oneOf(references).required()
                })
            }
        >
            <Form>
                <Field name={ClientID}/>
                <Field name={Telephone}/>
                <Field name={Email}/>
                <Field name={ReferenceID} as='select'>
                    {references.map((reference)=>{
                        return(<option key={reference.ID} value={reference.ID}>{reference.Description}</option>)
                    })}
                </Field>
            </Form>
        </Formik>
    )
}
