import ContactItem from "./ContactItem";

function ContactList({

  contacts,
  deleteContact,

  filterText,

  totalContacts

}) {

  if(totalContacts === 0){

    return(

      <p>
        No contacts yet.
        Add one above!
      </p>

    );

  }

  if(
    contacts.length === 0 &&
    filterText
  ){

    return(

      <p>
        No matches found for
        "{filterText}"
      </p>

    );

  }

  return(

    <section>

      <h2>Contacts</h2>

      {

        contacts.map(contact => (

          <ContactItem

            key={contact.id}

            contact={contact}

            deleteContact={deleteContact}

          />

        ))

      }

    </section>

  );

}

export default ContactList;
