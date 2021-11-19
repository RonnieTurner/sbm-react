import { useState } from "react";

export default function ClientForm() {
  const [enteredFName, setFirstName] = useState("");
  const [enteredLName, setLastName] = useState("");
  const [enteredStreet, setStreet] = useState("");
  const [enteredCity, setCity] = useState("");
  const [enteredState, setState] = useState("");
  const [enteredPhoneNumber, setPhoneNumber] = useState("");
  const [enteredEmail, setEmail] = useState("");

  const setFNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const setLNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const setStreetHandler = (event) => {
    setStreet(event.target.value);
  };

  const setCityHandler = (event) => {
    setCity(event.target.value);
  };

  const setStateHandler = (event) => {
    setState(event.target.value);
  };

  const setPhoneNumHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const setEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const clientData = {
      firstName: enteredFName,
      lastName: enteredLName,
      street: enteredStreet,
      city: enteredCity,
      state: enteredState,
      phoneNumber: enteredPhoneNumber,
      email: enteredEmail,
    };

    console.log(clientData)

    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setState("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>First Name</label>
          <input type="text" value={enteredFName} onChange={setFNameHandler} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={enteredLName} onChange={setLNameHandler} />
        </div>
        <div>
          <label>Street Address</label>
          <input
            type="text"
            value={enteredStreet}
            onChange={setStreetHandler}
          />
        </div>
        <div>
          <label>City</label>
          <input type="text" value={enteredCity} onChange={setCityHandler} />
        </div>
        <div>
          <label>State</label>
          <input type="text" value={enteredState} onChange={setStateHandler} />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            value={enteredPhoneNumber}
            onChange={setPhoneNumHandler}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" value={enteredEmail} onChange={setEmailHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add New Client</button>
      </div>
    </form>
  );
}
