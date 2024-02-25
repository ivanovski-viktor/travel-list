import { useState } from "react";

export default function Form({ setItems }) {
  const [description, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[1].value); we dont use this in React
    //We use controlled elements
    if (description.length < 2) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDiscription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
