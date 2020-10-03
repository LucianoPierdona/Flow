import { useField } from "formik";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);

  return (
    <>
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} id={field.name} />
      {error ? <p>{error}</p> : null}
    </>
  );
};
