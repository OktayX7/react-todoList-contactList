import React from "react";

const Alert = ({ variant, text, className }) => {
  const renderAlert = () => {
    let alert = "alert alert-";
    alert += variant ? variant : "danger";
    alert += className ? ` ${className}` : "";
    return alert;
  };
  return (
    <div className={renderAlert()} role="alert">
      {text}
    </div>
  );
};

export default Alert;
