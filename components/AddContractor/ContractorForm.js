import { useState } from "react";

export default function ContractorForm(props) {
  const [enteredFName, setFName] = useState("");
  const [enteredLName, setLName] = useState("");
  const [enteredStreet, setStreet] = useState("");
  const [enteredCity, setCity] = useState("");
  const [enteredState, setState] = useState("");
  const [enteredPhoneNumber, setPhoneNumber] = useState("");
  const [enteredEmail, setEmail] = useState("");

  const setFNameHandler = (event) => {
    setFName(event.target.value);
  };

  const setLNameHandler = (event) => {
    setLName(event.target.value);
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

  const setPhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const setEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const contractorData = {
      firstName: enteredFName,
      lastName: enteredLName,
      street: enteredStreet,
      city: enteredCity,
      state: enteredState,
      phoneNumber: enteredPhoneNumber,
      email: enteredEmail,
    };
    props.onSaveContractorData(contractorData);

    setFName("");
    setLName("");
    setStreet("");
    setCity("");
    setState("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>First Name</label>
        <input type="text" value={enteredFName} onChange={setFNameHandler} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={enteredLName} onChange={setLNameHandler} />
      </div>
      <div>
        <label>Steet Address</label>
        <input type="text" value={enteredStreet} onChange={setStreetHandler} />
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
          type="text"
          value={enteredPhoneNumber}
          onChange={setPhoneNumberHandler}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input type="text" value={enteredEmail} onChange={setEmailHandler} />
      </div>
      <div>
        <button type="submit">Add New Contractor</button>
      </div>
    </form>
  );
}
