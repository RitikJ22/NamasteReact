import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const { status, statusText } = error;

  return (
    <div>
      <h1>Error</h1>
      <h1> OOOPPSSS</h1>
      <h1>
        {status} : {statusText}
      </h1>
    </div>
  );
};

export default Error;
