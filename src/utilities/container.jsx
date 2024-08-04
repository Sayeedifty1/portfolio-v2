// src/components/Container.jsx
import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[85%]">{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
