import * as yup from "yup";

export const paymentRegSchema = yup.object().shape({
    cardOwnerName: yup.string().required("Card owner name is required"),
    cardNumber: yup.number().required("Card number is required"),
    expiryMonth: yup.number().required("Expiry month is required"),
    expiryYear: yup.number().required("Expiry year is required"),
    cvv: yup.number().required("CVV is required"),
})