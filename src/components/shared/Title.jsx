import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Gaurav ChatApp",
  description = "A full stack Chatapp created by Ashutosh Gaurav using React, Node.js, Express and Socket.io.",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
