import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { TextField } from 'formik-material-ui';
import "./Register.css";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    email: Yup.string().email("Please provide valid email Address").required("Required"),
    username: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),

});

const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    userName: "",
    role: ["user"],
    password: "",
    confirmPassword: "",
}
const RegistrationForm = (props) => (
    <div className="container">
        <fieldset>
            <legend>Register</legend>
            <Form>
                <div className="row jsutify-content-start">
                    <div className="col-2">
                        <Field
                            component={TextField}
                            name="username"
                            type="text"
                            label="User Name"
                        />

                    </div>
                    <div>

                    </div>

                </div>
            </Form>
        </fieldset>

    </div>

)
const Register = () => {
    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                component={RegistrationForm}
            >

            </Formik>
        </div>
    )
}

export default Register;
