import React from "react";
import { useState } from "react";
import Button from "../partials/Button";
import Form from "../partials/Form";

const AddContactForm = ({ addContact }) => {
  const [displayForm, setdisplayForm] = useState(false);

  const handleAddContact = () => {
    setdisplayForm(!displayForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    addContact(contact);

    e.target.reset();
    setdisplayForm(false);
  };
  return (
    <div className="container">
      {!displayForm ? (
        <Button
          onClick={() => handleAddContact()}
          outline
          variant={"success"}
          size={"lg"}
          className={"w-50 d-block mx-auto my-4"}
        >
          Add New Contact
        </Button>
      ) : (
        <>
          <Form
            formClassName={"my-4 w-50 mx-auto"}
            formSubmit={handleSubmit}
            formBtnText={"Add Contact"}
            submitBtnclassName={"w-25"}
            cancelBtn
            cancelBtnVariant={"warning"}
            cancelBtnText={"Cancel"}
            cancelBtnClassName={"w-25"}
            cancelBtnOnClick={() => handleAddContact()}
          />
        </>
      )}
    </div>
  );
};

export default AddContactForm;
