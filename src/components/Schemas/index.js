import * as yup from "yup";
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{5,20}$/;
const mobileRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const basicSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is Required"),
    emailId: yup.string().email("Invalid Email-Id").required("Email is Required"),
    position: yup.string().required("Position is Required"),
    password: yup.string().min(5).max(20).matches(passwordRegExp, { message: "Password rules not matched." }).required("Password is Required"),
    mobileNumber: yup.string().matches(mobileRegExp, "Mobile number is not valid")
})