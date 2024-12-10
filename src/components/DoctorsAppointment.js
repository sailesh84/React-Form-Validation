import React from "react";
import { useFormik } from 'formik';
import { FaMale, FaFemale, FaTransgenderAlt } from "react-icons/fa";
import { doctorRegSchema } from "./Schemas/doctor";

const DoctorsAppointment = () => {
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            fullName: '',
            mobileNumber: '',
            emailId: ''
        },
        validationSchema: doctorRegSchema,
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
                        <div className="form-items text-center">
                            <h3 className="text-center mb-3">BOOK AN APPOINTMENT FOR</h3>
                            <form className="requires-validation" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="col-md-12 mb-4">
                                    <input type="radio" class="btn-check" name="gender" id="male" checked />
                                    <label class="btn btn-lg btn-outline-secondary" for="male"><FaMale /> Male</label>

                                    <input type="radio" class="btn-check" name="gender" id="female" />
                                    <label class="btn btn-lg btn-outline-secondary ms-2" for="female"><FaFemale /> Female</label>
                                    
                                    <input type="radio" class="btn-check" name="gender" id="others" />
                                    <label class="btn btn-lg btn-outline-secondary ms-2" for="others"><FaTransgenderAlt  /> Others</label>
                                </div>

                                <p className="text-center mb-1">Please provide following information about Anz CMK</p>
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
                                    <input class="form-control" type="text" name="mobileNumber" placeholder="Mobile Number"
                                        value={values.mobileNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.mobileNumber && touched.mobileNumber ? "input-error" : ""} />
                                    {errors.mobileNumber && touched.mobileNumber && <p className="errors-mssg">
                                        <small>{errors.mobileNumber}</small></p>}
                                </div>

                                <div className="col-md-12">
                                    <input class="form-control" type="text" name="emailId" placeholder="Email ID"
                                        value={values.emailId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.emailId && touched.emailId ? "input-error" : ""} />
                                    {errors.emailId && touched.emailId && <p className="errors-mssg">
                                        <small>{errors.emailId}</small></p>}
                                </div>

                                <p className="mt-4 mb-0 text-center"><small>By Booking this appointment you agree to the</small></p>
                                <div className="form-check radio-inline">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" style={{ float: "none" }} checked />
                                    <label className="form-check-label" style={{ marginLeft: "5px" }}><small>Terms &amp; Conditions</small> </label>
                                </div>

                                <div className="form-button mt-3 d-grid gap-2">
                                    <button disabled={isSubmitting} type="submit" className="btn btn-primary">Confirm Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsAppointment;