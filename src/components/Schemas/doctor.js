import * as yup from "yup";
const mobileRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const doctorRegSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is Required"),
    emailId: yup.string().email("Invalid Email-Id").required("Email is Required"),
    mobileNumber: yup.string().matches(mobileRegExp, "Mobile number is not valid").required("Mobile number is Required")
})