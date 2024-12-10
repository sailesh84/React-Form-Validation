import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import "../PaymentForms/Payment.css";
import { FaCreditCard, FaPaypal, FaMobileAlt, FaCcVisa, FaCcMastercard, FaCcAmex, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { paymentRegSchema } from "../Schemas/payment";

const Payment = () => {
    const [isActiveCC, setIsActiveCC] = useState(false);
    const [isActivePP, setIsActivePP] = useState(false);
    const [isActiveNB, setIsActiveNB] = useState(false);

    const handleClick = (e) => {
        if (e.target.name === "creditCard") {
            setIsActiveCC(true);
            setIsActivePP(false);
            setIsActiveNB(false);
        } else if (e.target.name === "payPal") {
            setIsActiveCC(false);
            setIsActivePP(true);
            setIsActiveNB(false);
        } else {
            setIsActiveCC(false);
            setIsActivePP(false);
            setIsActiveNB(true);
        }
    }

    useEffect(() => {
        setIsActiveCC(true);
        setIsActivePP(false);
        setIsActiveNB(false);
    }, []);

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            cardOwnerName: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvv: ''
        },
        validationSchema: paymentRegSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            // console.log(actions);
            console.log("submitted");
            // actions.resetForm();
        }
    });


    return (
        <div className="container pay-container py-5">
            <div className="row mb-4">
                <div className="col-lg-12 mx-auto text-center">
                    <h1 className="display-6" style={{ color: "#ffffff" }}>Make your Payment</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <div className="bg-white shadow-sm pt-2 pl-2 pr-2 pb-2">
                                <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-0">
                                    <li className="nav-item">
                                        <Link className={isActiveCC ? "nav-link active rounded-0" : "nav-link rounded-0"} id="creditCard" name="creditCard" onClick={(e) => handleClick(e)}>
                                            <FaCreditCard style={{ marginRight: ".5rem" }} /> Credit Card
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={isActivePP ? "nav-link active rounded-0" : "nav-link rounded-0"} id="payPal" name="payPal" onClick={(e) => handleClick(e)}>
                                            <FaPaypal style={{ marginRight: ".5rem" }} /> Paypal
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={isActiveNB ? "nav-link active rounded-0" : "nav-link rounded-0"} id="netBanking" name="netBanking" onClick={(e) => handleClick(e)}>
                                            <FaMobileAlt style={{ marginRight: ".5rem" }} /> Net Banking
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className={isActiveCC ? "tab-pane show active fade pt-3" : "tab-pane fade pt-3"}>
                                    <form autoComplete="off" onSubmit={handleSubmit}>
                                        <div class="form-group mb-4">
                                            <label for="cardOwnerName">
                                                <h6>Card Owner</h6>
                                            </label>
                                            <input type="text" name="cardOwnerName" placeholder="Card Owner Name" class="form-control"
                                                value={values.cardOwnerName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.cardOwnerName && touched.cardOwnerName ? "form-control input-error" : "form-control"} />
                                            {errors.cardOwnerName && touched.cardOwnerName && <p className="errors-mssg">
                                                <small>{errors.cardOwnerName}</small></p>}
                                        </div>

                                        <div className="form-group mb-4">
                                            <label for="cardNumber">
                                                <h6>Card number</h6>
                                            </label>
                                            <div className="input-group">
                                                <input type="number" name="cardNumber" placeholder="For Ex: 4XXX-XXXX-XXXX-XXXX" class="form-control"
                                                    value={values.cardNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.cardNumber && touched.cardNumber ? "form-control input-error" : "form-control"} />

                                                <div className="input-group-append">
                                                    <span className="input-group-text text-muted">
                                                        <FaCcVisa className="mx-1" />
                                                        <FaCcMastercard className="mx-1" />
                                                        <FaCcAmex className="mx-1" />
                                                    </span>
                                                </div>
                                            </div>
                                            {errors.cardNumber && touched.cardNumber && <p className="errors-mssg">
                                                <small>{errors.cardNumber}</small></p>}
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group">
                                                    <label>
                                                        <span>
                                                            <h6>Expiration Date</h6>
                                                        </span>
                                                    </label>
                                                    <div class="input-group">
                                                        <input type="number" placeholder="MM" name="expiryMonth" class="form-control"
                                                            value={values.expiryMonth}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={errors.expiryMonth && touched.expiryMonth ? "form-control input-error" : "form-control"} />

                                                        <input type="number" placeholder="YY" name="expiryYear" class="form-control"
                                                            value={values.expiryYear}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={errors.expiryYear && touched.expiryYear ? "form-control input-error" : "form-control"} />
                                                    </div>
                                                    {errors.expiryMonth && touched.expiryMonth && <p className="errors-mssg">
                                                        <small>{errors.expiryMonth}</small></p>}
                                                    {errors.expiryYear && touched.expiryYear && <p className="errors-mssg">
                                                        <small>{errors.expiryYear}</small></p>}
                                                </div>
                                            </div>

                                            <div class="col-sm-4">
                                                <div class="form-group mb-4">
                                                    <label>
                                                        <h6>CVV <FaQuestionCircle /> </h6>
                                                    </label>
                                                    <input type="number" class="form-control" name="cvv" placeholder="XXX"
                                                        value={values.cvv}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={errors.cvv && touched.cvv ? "form-control input-error" : "form-control"} />
                                                    {errors.cvv && touched.cvv && <p className="errors-mssg">
                                                        <small>{errors.cvv}</small></p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer d-grid gap-2">
                                            <button type="submit" class="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment </button>
                                        </div>
                                    </form>
                                </div>

                                <div className={isActivePP ? "tab-pane show active fade pt-3" : "tab-pane fade pt-3"}>
                                    <h6 class="pb-2">Select your paypal account type</h6>

                                    <form autoComplete="off">
                                        <div class="form-group mb-4">
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio" checked /> Domestic </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio" class="ms-4" />International
                                            </label>
                                        </div>
                                        <button type="button" class="btn btn-primary mb-4">
                                            <FaPaypal /> Log into my Paypal
                                        </button>
                                    </form>
                                    <p class="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                </div>

                                <div className={isActiveNB ? "tab-pane show active fade pt-3" : "tab-pane fade pt-3"}>
                                    <form autoComplete="off">
                                        <div class="form-group mb-4">
                                            <label for="Select Your Bank">
                                                <h6>Select your Bank</h6>
                                            </label>
                                            <select class="form-control" id="ccmonth">
                                                <option value="" selected disabled>--Please select your Bank--</option>
                                                <option value="ICICI Bank">ICICI Bank</option>
                                                <option value="Bank of Baroda">Bank of Baroda</option>
                                                <option value="Axis Bank">Axis Bank</option>
                                                <option value="State Bank of India">State Bank of India</option>
                                                <option value="Central Bank of India">Central Bank of India</option>
                                                <option value="Punjab National Bank">Punjab National Bank</option>
                                                <option value="Dena Bank">Dena Bank</option>
                                                <option value='Bank of India'>Bank of India</option>
                                                <option value="Bank of Maharashtra">Bank of Maharashtra</option>
                                                <option value="HDFC Bank">HDFC Bank</option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-4">
                                            <button type="submit" disabled={isSubmitting} class="btn btn-primary "><FaMobileAlt /> Proceed Payment</button>
                                        </div>
                                    </form>
                                    <p class="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;