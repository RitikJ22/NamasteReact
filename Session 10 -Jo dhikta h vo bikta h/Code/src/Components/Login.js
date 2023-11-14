// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div className="flex flex-col items-center justify-center md:h-screen ">
          <h1 className="flex flex-col items-center justify-center  mb-6 text-2xl font-semibold text-gray-900 dark:text-white ">
            LOGIN
          </h1>
          <Form className='class="space-y-4 md:space-y-6"'>
            <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </h2>
            <Field
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </h2>
            <ErrorMessage name="email" component="div" />
            <Field
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <ErrorMessage name="password" component="div" />
            <button
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default Login;
