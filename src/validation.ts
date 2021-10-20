import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Not a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/[a-zA-Z]/, "Should only contain letters")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/[a-zA-Z]/, "Should only contain letters")
    .required("Last name is required"),
  email: Yup.string().email("Not a valid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Should be at least 6 characters long")
    .matches(/[A-Z]/, "Should have at least 1 capital letter")
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords should match")
    .required("You need to repeat password"),
});

export const recoverPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Not a valid email").required("Email is required"),
});
