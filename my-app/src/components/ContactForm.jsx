import { useState } from "react";

function ContactForm({ addContact }) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

  const [error,setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!name || !email){

      setError(
        "Name and Email are required."
      );

      return;
    }

    if(!email.includes("@")){

      setError(
        "Please enter a valid email."
      );

      return;
    }

    addContact({

      id: Date.now().toString(),

      name,
      email,
      phone

    });

    setName("");
    setEmail("");
    setPhone("");
    setError("");

  };

  return(

    <section>

      <h2>Add Contact</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        {error &&

          <p className="error">
            {error}
          </p>

        }

        <button type="submit">
          Add Contact
        </button>

      </form>

    </section>

  );

}

export default ContactForm;
