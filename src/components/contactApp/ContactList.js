import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contactInformation, deleteContact, updateContact }) => {
  console.log(contactInformation);
  return (
    <div className="container">
      <div className="row">
        {contactInformation.map((contact) => (
          <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} updateContact={updateContact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
