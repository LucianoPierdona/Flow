import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { InputField } from "../FormLayout/components/InputField";
import FormLayout from "../FormLayout/FormLayout";

const ForgotPassword = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <FormLayout>
            <h1>Forgot Your Password?</h1>
            <InputField
              type="text"
              label="Email"
              name="email"
              placeholder="Your Email"
              required
            />
            <div className="external-links">
              <Link to="/login">Get Back to Login</Link>
            </div>
            <button type="submit">Send Email</button>
            <Link to="/">Back to Home</Link>
          </FormLayout>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
