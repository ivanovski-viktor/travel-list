export default function Item({ item, onDeleteItem, changePackState }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => changePackState(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="delete">
        ❌
      </button>
    </li>
  );
}
