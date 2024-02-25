import { useState } from "react";
import Logo from "./Components/Logo.js";
import Form from "./Components/Form.js";
import PackingList from "./Components/PackingList.js";
import Stats from "./Components/Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
