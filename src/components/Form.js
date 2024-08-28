import React, { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import Joi from "joi";

import "./Form.css";
const INITAL_VALUE = {
    Name: "",
    Email: "",
    Mathsmark: "",
    Physicsmark: "",
    Chemistrymark: "",
}

const userSchema = Joi.object({
    Name: Joi.string().required().messages({
        'string.empty': `"Name" is required`,
    }),
    Email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" is required`,
            'string.email': `"Email" should be a valid email`,
        }),
    Mathsmark: Joi.number().max(200).required().messages({
        'number.base': `"Mathsmark" must be a number`,
        'number.max': `"Mathsmark" must be a maximum of 200`,
        'any.required': `"Mathsmark" is required`,
    }),
    Physicsmark: Joi.number().max(200).required().messages({
        'number.base': `"Physicsmark" must be a number`,
        'number.max': `"Physicsmark" must be a maximum of 200`,
        'any.required': `"Physicsmark" is required`,
    }),
    Chemistrymark: Joi.number().max(200).required().messages({
        'number.base': `"Chemistrymark" must be a number`,
        'number.max': `"Chemistrymark" must be a maximum of 200`,
        'any.required': `"Chemistrymark" is required`,
    }),
});


function CutoffMarkForm() {
    const validate = (values) => {
        const errors = {};
        const { error } = userSchema.validate(values);
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = err.message;
        }
        return errors;

    };
    const handleSubmit = (values) => {
        const { error } = userSchema.validate(values)
        if (!error) {
            alert("Succesfully submit value")
        }
        else (
            alert("not submit value")
        )
    }
    // const [userData ,setUserData] =useState(INITAL_VALUE)
    return (
        <div className="CutoffMarkForm ">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 forms mt-5 ">
                        <div className="card " >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <Formik
                                    initialValues={INITAL_VALUE}
                                    validate={validate}
                                    onSubmit={handleSubmit}
                                >
                                    {() => {
                                        return (
                                            <Form>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="Name" className="form-label">Name <span className="text-primary">*</span></label>
                                                    <Field
                                                        className="form-control"
                                                        // type="Name"
                                                        name="Name"
                                                        placeholder="Enter Your Name"
                                                    />
                                                    <ErrorMessage className="sec1" name="Name" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="Email" className="form-label">
                                                        Email<span className="text-primary">*</span>
                                                    </label>
                                                    <Field
                                                        className="form-control"
                                                        type="email"
                                                        name="Email"
                                                        placeholder="Enter Your Email"
                                                    />
                                                    <ErrorMessage className="sec1" name="Email" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="Mathsmark" className="form-label">Mathsmark <span className="text-primary">*</span></label>
                                                    <Field
                                                        className="form-control"
                                                        type="number"
                                                        name="Mathsmark"
                                                        placeholder="Enter Your Mathsmark"
                                                    />
                                                    <ErrorMessage className="sec1" name="Mathsmark" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="Physicsmark" className="form-label">Physicsmark <span className="text-primary">*</span></label>
                                                    <Field
                                                        className="form-control"
                                                        type="number"
                                                        name="Physicsmark"
                                                        placeholder="Enter Your Physicsmark"
                                                    />
                                                    <ErrorMessage className="sec1" name="Physicsmark" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="Chemistrymark" className="form-label"> Chemistrymark <span className="text-primary">*</span></label>
                                                    <Field
                                                        className="form-control"
                                                        type="number"
                                                        name="Chemistrymark"
                                                        placeholder="Enter Your  Chemistrymark"
                                                    />
                                                    <ErrorMessage className="sec1" name="Chemistrymark" />
                                                </div>
                                                <div className="submitbutton">
                                                    <button type="sumbit" class="btn btn-primary">Submit</button>
                                                </div>

                                            </Form>
                                        )
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

            </div>
        </div>
    )
}
export default CutoffMarkForm;