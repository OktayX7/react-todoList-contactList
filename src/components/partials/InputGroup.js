import React from "react";
import Button from "./Button";
import Input from "./Input";

const InputGroup = ({
  inpType,
  inpClassName,
  inpPlaceHolder,
  btnType,
  btnVariant,
  btnDisabled,
  btnclassName,
  btnSize,
  btnChildren,
  inpGrpClassName,
}) => {
  const renderClassName = () => {
    let classes = "input-group";
    classes += inpGrpClassName ? ` ${inpGrpClassName}` : "";
    return classes;
  };

  return (
    <div className={renderClassName()}>
      <Input type={inpType} className={inpClassName} placeholder={inpPlaceHolder} />
      <Button type={btnType} variant={btnVariant} disabled={btnDisabled} className={btnclassName} size={btnSize}>
        {btnChildren}
      </Button>
    </div>
  );
};

InputGroup.defaultProps = {
  inpType: "text",
  inpClassName: "form-control",
  inpPlaceHolder: "Enter Todo",
  btnType: "submit",
  btnVariant: "primary",
  btnDisabled: false,
  btnclassName: "",
  btnSize: "large",
  btnChildren: "Add Todo",
};

export default InputGroup;
