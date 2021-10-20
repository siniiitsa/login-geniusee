import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Not a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Not a valid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Should be at least 6 characters long")
    .matches(/[A-Z]/, "Should have at least 1 capital letter")
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords should match")
    .required("You need to repeat password"),
});
