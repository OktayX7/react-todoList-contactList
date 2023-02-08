import React from "react";
import Input from "./Input";
import Label from "./Label";

const FormDiv = ({ divClassName, lblFor, lblText, lblClassName, inpPlch, required, inpClassName, inpType }) => {
  return (
    <div className={divClassName}>
      <Label htmlFor={lblFor} className={lblClassName}>
        {lblText}
      </Label>
      <Input id={lblFor} placeholder={inpPlch} required={required} className={inpClassName} type={inpType} />
    </div>
  );
};

FormDiv.defaultProps = {
  divClassName: "col-sm-6",
};

export default FormDiv;
