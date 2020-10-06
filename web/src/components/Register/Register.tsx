import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRegisterMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../FormLayout/components/InputField";
import FormLayout from "../FormLayout/FormLayout";

const Register = () => {
  const history = useHistory();
  const [, register] = useRegisterMutation();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await register(values);
        if (response.data?.register.errors) {
          setErrors(toErrorMap(response.data.register.errors));
          console.log(response.data.register.errors);
        } else if (response.data?.register.user) {
          // worked
          history.push("/");
        }
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

export default withUrqlClient(createUrqlClient)(Register);
