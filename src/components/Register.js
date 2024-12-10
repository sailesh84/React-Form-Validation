import React from "react";
import { useFormik } from 'formik';
import "../components/Register.css";
import { basicSchema } from "./Schemas";

const Register = () => {
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            emailId: '',
            position: '',
            password: ''
        },
        validationSchema: basicSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            // console.log(actions);
            console.log("submitted");
            // actions.resetForm();
        }
    });

    // console.log(errors);

    return (
        <div className="container mt-5">
            <div className="form-body">
                <div className="row">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Register Today</h3>
                            <p>Fill in the data below.</p>

                            <div class="alert alert-danger" role="alert">
                                <span style={{display: "inline-block"}}>*Password must contain at least one digit, one lowercase, one special character and one uppercase character.</span>
                                <span style={{display: "inline-block"}}>*Password must be between 5 and 20 characters in length.</span>
                            </div>

                            <form className="requires-validation" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <input class="form-control" type="text" name="fullName" placeholder="Full Name"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.fullName && touched.fullName ? "input-error" : ""} />
                                    {errors.fullName && touched.fullName && <p className="errors-mssg">
                                        <small>{errors.fullName}</small></p>}
                                </div>

                                <div className="col-md-12">
                                    <input class="form-control" type="email" name="emailId" placeholder="E-mail Address"
                                        value={values.emailId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.emailId && touched.emailId ? "input-error" : ""} />
                                    {errors.emailId && touched.emailId && <p className="errors-mssg">
                                        <small>{errors.emailId}</small></p>}
                                </div>

                                <div className="col-md-12">
                                    <select class="form-select mt-3" name="position"
                                        value={values.position}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.position && touched.position ? "input-error" : ""}>
                                        <option selected disabled value="">Position</option>
                                        <option value="jweb">Junior Web Developer</option>
                                        <option value="sweb">Senior Web Developer</option>
                                        <option value="pmanager">Project Manager</option>
                                    </select>
                                    {errors.position && touched.position && <p className="errors-mssg">
                                        <small>{errors.position}</small></p>}
                                </div>

                                <div className="col-md-12">
                                    <input class="form-control" type="password" name="password" placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.password && touched.password ? "input-error" : ""} />
                                    {errors.password && touched.password && <p className="errors-mssg">
                                        <small>{errors.password}</small></p>}
                                </div>

                                <div className="col-md-12 mt-3">
                                    <label class="mb-3 mr-1" for="gender">Gender: </label>

                                    <input type="radio" class="btn-check" name="gender" id="male" checked />
                                    <label class="btn btn-sm btn-outline-secondary ms-2" for="male">Male</label>

                                    <input type="radio" class="btn-check" name="gender" id="female" />
                                    <label class="btn btn-sm btn-outline-secondary ms-2" for="female">Female</label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="invalidCheck" checked />
                                    <label className="form-check-label"><small>I confirm that all data are correct</small> </label>
                                </div>

                                <div className="form-button mt-3 d-grid gap-2">
                                    <button disabled={isSubmitting} type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;