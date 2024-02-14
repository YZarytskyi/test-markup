"use client";

import Image from "next/image";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  isAgree: boolean;
};

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(12, "Phone number is too short"),
  isAgree: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions",
  ),
});

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  isAgree: false,
};

const data = {
  formFields: [
    {
      name: "name",
      type: "text",
      placeholder: "Name*",
    },
    {
      name: "company",
      type: "text",
      placeholder: "Company*",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email*",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone*",
    },
  ],
  checkboxLabel: "I agree to the processing of personal data according to the ",
  privacyPolicy: "Privacy Policy",
};

export const FooterForm = () => {
  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    try {
      const response = await fetch(
        "https://webhook.site/ca44ca66-1865-426d-bfdc-57bb7c303e80",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      if (response.ok) {
        actions.resetForm();
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className="flex w-full flex-col justify-between gap-[2rem] md:w-1/2 md:flex-row">
        <div className="flex w-full max-w-[23rem] flex-col gap-[0.75rem]">
          {data.formFields.map(({ name, type, placeholder }) => (
            <div key={name}>
              <Field
                name={name}
                type={type}
                placeholder={placeholder}
                className="block bg-transparent p-[0.3125rem]"
              />
              <ErrorMessage name={name}>
                {(msg) => <p className="errorMessage">{msg}</p>}
              </ErrorMessage>
            </div>
          ))}

          <label className="ml-[0.3125rem] mt-[1.375rem] flex max-w-[16.5rem] items-center gap-[0.6875rem] text-[0.5625rem] leading-[1] text-accentDark">
            <Field name="isAgree" type="checkbox" className="peer hidden" />
            <span className="h-[0.9375rem] w-[0.9375rem] flex-shrink-0 cursor-pointer rounded-full border border-white bg-[rgba(52,57,57,0.7)] peer-checked:border-[0.1875rem] peer-checked:border-[rgba(52,57,57,0.7)] peer-checked:bg-white" />
            <span>
              {data.checkboxLabel}
              <a href="/" className="text-accent underline">
                {data.privacyPolicy}
              </a>
            </span>
          </label>
          <ErrorMessage name="isAgree">
            {(msg) => <p className="errorMessage">{msg}</p>}
          </ErrorMessage>
        </div>

        <div className="flex h-full flex-shrink-0 flex-row-reverse items-center justify-between gap-[2rem] md:flex-col">
          <div className="flex h-[6.75rem] w-[6.75rem] items-center justify-center rounded-full bg-gradient-to-l from-[#142F28] to-[rgba(52,57,57,0.8)]">
            <div className="flex h-[5.5625rem] w-[5.5625rem] items-center justify-center rounded-full bg-accent">
              <Image src="/images/user.png" alt="User" width={79} height={79} />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-[6.25rem] border-[0.25rem] border-accent px-[1.66rem] py-[0.88rem] font-bold transition-colors hover:bg-accent hover:bg-opacity-15 active:bg-accent active:bg-opacity-25"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
