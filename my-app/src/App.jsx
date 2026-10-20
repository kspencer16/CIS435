import { useState } from "react";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {

  const [contacts, setContacts] = useState([]);

  const [filterText, setFilterText] = useState("");

  const addContact = (contact) => {

    setContacts([
      ...contacts,
      contact
    ]);

  };

  const deleteContact = (id) => {

    setContacts(
      contacts.filter(contact =>
        contact.id !== id
      )
    );

  };

  const filteredContacts = contacts.filter(contact =>

    contact.name.toLowerCase().includes(filterText.toLowerCase()) ||

    contact.email.toLowerCase().includes(filterText.toLowerCase())

  );

  return (

    <main className="container">

      <h1>Simple Contact Book</h1>

      <ContactForm
        addContact={addContact}
      />

      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />

      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        filterText={filterText}
        totalContacts={contacts.length}
      />

    </main>

  );

}

export default App;
