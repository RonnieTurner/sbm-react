import { useState } from "react";

export default function ProductForm() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [enteredCost, setEnteredCost] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value); //each event handler will return event object of which target and value are obtained
    console.log(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
    console.log(event.target.value);
  };

  const costChangeHandler = (event) => {
    setEnteredCost(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-product__controls">
        <div className="new-product__control">
          <label>Product Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-product__control">
          <label>Product Type</label>
          <input type="text" onChange={typeChangeHandler} />
        </div>
        <div className="new-product__control">
          <label>Cost</label>
          <input type="number" onChange={costChangeHandler}/>
        </div>
      </div>
      <div className="new-product__actions">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}
