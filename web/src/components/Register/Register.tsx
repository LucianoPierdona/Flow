import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { InputField } from "../FormLayout/components/InputField";
import FormLayout from "../FormLayout/FormLayout";

const Register = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <FormLayout>
            <h1>Register</h1>
            <InputField
              type="text"
              label="Email"
              name="email"
              placeholder="Your Email"
              required
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
            <div className="external-links">
              <Link to="/login">Already Have an account?</Link>
            </div>
            <button type="submit">Register</button>
            <Link to="/">Back to Home</Link>
          </FormLayout>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
