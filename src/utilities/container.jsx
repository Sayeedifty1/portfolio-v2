// src/components/Container.jsx
import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="w-4/5 mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
