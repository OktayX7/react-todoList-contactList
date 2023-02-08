import React from "react";
const Button = ({ type, outline, variant, disabled, className, size, children, onClick }) => {
  const renderClasses = () => {
    let classes = "btn btn-";
    classes += outline ? "outline-" + variant : variant;
    classes += size ? ` btn-${size}` : "";
    classes += disabled ? " disabled" : "";
    classes += className ? ` ${className}` : "";
    return classes;
  };

  return (
    <button type={type} onClick={onClick} className={renderClasses()} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  outline: false,
  variant: "primary",
  disabled: false,
  className: "",
  size: "md",
  children: "Button",
};

export default Button;
