function ContactItem({
  contact,
  deleteContact
}) {

  return (

    <article className="contact-card">

      <h3>{contact.name}</h3>

      <p>{contact.email}</p>

      <p>{contact.phone}</p>

      <button
        onClick={() =>
          deleteContact(contact.id)
        }
      >
        Delete
      </button>

    </article>

  );

}

export default ContactItem;
