import React from "react";
import FormDiv from "./FormDiv";
import Button from "./Button";
const Form = ({
  formSubmit,
  formClassName,
  formBtnText,
  formBtnVariant,
  cancelBtn,
  cancelBtnVariant,
  cancelBtnText,
  cancelBtnClassName,
  submitBtnclassName,
  cancelBtnOnClick,
}) => {
  return (
    <form onSubmit={formSubmit} className={formClassName}>
      <div className="row g-3">
        <FormDiv lblFor={"firstName"} inpPlch={"Adınız"} required />

        <FormDiv lblFor={"lastName"} lblText={"Last Name"} inpPlch={"Soyadınız"} required />

        <FormDiv divClassName={"col-sm-12"} lblFor={"phone"} lblText={"Phone"} inpPlch={"05347226441"} required />

        <FormDiv
          divClassName={"col-sm-12"}
          lblFor={"email"}
          lblText={"Email"}
          inpPlch={"oktayy.gedikk@gmail.com"}
          inpType={"email"}
          required
        />
        <div className="d-flex justify-content-around">
          <Button type={"submit"} variant={formBtnVariant} className={submitBtnclassName}>
            {formBtnText}
          </Button>
          {cancelBtn && (
            <Button onClick={cancelBtnOnClick} variant={cancelBtnVariant} className={cancelBtnClassName}>
              {cancelBtnText}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
