import { useField } from "formik";
import React from "react";
import styled from "styled-components";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const ErrorMessage = styled.p`
  font-family: "Poppins", sans-serif;
  color: tomato;
`;

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <>
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} id={field.name} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};
