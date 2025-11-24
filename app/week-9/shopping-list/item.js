function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="hover:bg-exhilarate blur-pane terminal-gradient-background scanlines relative mb-2 mb-4 flex cursor-pointer flex-col gap-1 rounded-md border p-2 capitalize"
    >
      <p className="text-ld">{name}</p>
      <p className="text-italics">{category}</p>
      <p className="">
        {quantity > 0 ? `In stock: ${quantity}` : `Out of stock`}
      </p>
    </li>
  );
}

export default Item;
