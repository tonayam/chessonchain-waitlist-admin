import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Alert = ({ message }) => {
  return (
    <div className='alert-modal'>
      <BsCheckCircleFill className='icon' /> <h2>{message}</h2>
    </div>
  );
};

export default Alert;
