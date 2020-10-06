import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useLoginMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../FormLayout/components/InputField";
import FormLayout from "../FormLayout/FormLayout";

const Login = () => {
  const history = useHistory();
  const [, login] = useLoginMutation();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await login({ options: values });
        if (response.data?.login.errors) {
          setErrors(toErrorMap(response.data.login.errors));
        } else if (response.data?.login.user) {
          // worked
          history.push("/");
        }
      }}
    >
      {() => (
        <Form>
          <FormLayout>
            <h1>Login</h1>
            <InputField
              type="text"
              label="Email"
              name="username"
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
              <Link to="/forgot">Forgot Password?</Link>
              <Link to="/register">Don't Have an account?</Link>
            </div>
            <button type="submit">Login</button>
            <Link to="/">Back to Home</Link>
          </FormLayout>
        </Form>
      )}
    </Formik>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
