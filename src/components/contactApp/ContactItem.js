import React, { useState } from "react";
import Button from "../partials/Button";
import Form from "../partials/Form";

const ContactItem = ({ contact, deleteContact, updateContact }) => {
  const [displayCard, setDisplayCard] = useState(false);
  const [update, setUpdate] = useState(false);

  const toggleDisplayCard = () => {
    setDisplayCard(!displayCard);
  };

  const toggleUpdate = () => {
    setUpdate(!update);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = {
      id: contact.id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      update: false,
    };
    updateContact(updatedContact);
    setUpdate(false);
  };

  return (
    <div className="col-6">
      <div className="card mb-3 text-center">
        <div className="card-body text-bg-light">
          <h5 className="card-title">
            {contact.firstName} {contact.lastName}
          </h5>
          {displayCard && (
            <>
              <h6 className="card-subtitle mb-2 text-muted">Phone : {contact.phone}</h6>
              <p className="card-text">Email : {contact.email}</p>
            </>
          )}
          <div className="d-flex justify-content-evenly">
            <Button onClick={toggleDisplayCard} className={"fw-bold"}>
              {displayCard ? "Hide Details" : "Show Details"}
            </Button>
            <Button className={"fw-bold"} variant={"danger"} onClick={() => deleteContact(contact.id)}>
              Delete
            </Button>

            {update ? (
              <Button className={"fw-bold"} variant={"warning"} onClick={toggleUpdate}>
                Cancel
              </Button>
            ) : (
              <Button className={"fw-bold"} variant={"success"} onClick={toggleUpdate}>
                Update
              </Button>
            )}

            {/* <Button className={"fw-bold"} variant={"success"} onClick={() => updateContact(contact)}>
              Update
            </Button> */}
          </div>
        </div>
        {update && (
          <Form
            formSubmit={handleSubmit}
            formClassName={"my-3 p-3"}
            formBtnText={"Update"}
            formBtnVariant={"success"}
          />
        )}
      </div>
    </div>
  );
};

export default ContactItem;
