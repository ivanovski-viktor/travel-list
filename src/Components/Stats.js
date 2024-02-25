export default function Stats({ items }) {
  const numItems = items.length;
  if (!numItems) {
    return (
      <p className="stats">
        <em>Start Adding Items! 🚀</em>
      </p>
    );
  }

  const packedItems = items.filter((item) => item.packed);
  const numOfPackedItems = packedItems.length;
  const precentOfPackedItems = (numOfPackedItems / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {numOfPackedItems} ({Math.floor(precentOfPackedItems) || 0}%)
      </em>
    </footer>
  );
}
