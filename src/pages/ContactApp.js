import Header from "../components/contactApp/Header";
import { useState, useEffect } from "react";
import AddContactForm from "../components/contactApp/AddContactForm";
import ContactList from "../components/contactApp/ContactList";
const localStorageKey = "contactApp.contactInformation";

function App() {
  const [contactInformation, setContactInformation] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(localStorageKey));
    return localData
      ? localData
      : [
          {
            id: 1,
            firstName: "React öğren",
            lastName: false,
            phone: "05347226441",
            email: "oktayy.gedikk@gmail.com",
            update: false,
          },
        ];
  });

  const addContact = (contact) => {
    const newContact = {
      id: contactInformation.length + 1,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      email: contact.email,
      update: false,
    };

    setContactInformation([...contactInformation, newContact]);
  };

  const updateContact = (contact) => {
    const updatedContact = {
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
      email: contact.email,
      update: false,
    };

    const updatedContactInformation = contactInformation.map((contact) => {
      if (contact.id === updatedContact.id) {
        return updatedContact;
      } else {
        return contact;
      }
    });

    setContactInformation(updatedContactInformation);
  };

  const deleteContact = (id) => {
    const updatedContactInformation = contactInformation.filter((contact) => contact.id !== id);

    setContactInformation(updatedContactInformation);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactInformation));
  }, [contactInformation]);

  return (
    <>
      <Header />
      <AddContactForm addContact={addContact} />
      <ContactList
        deleteContact={deleteContact}
        updateContact={updateContact}
        contactInformation={contactInformation}
      />
    </>
  );
}

export default App;
