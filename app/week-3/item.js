function Item({ name, quantity, category }) {
  return (
    <li className="blur-pane scanlines terminal-gradient-background relative mb-2 flex flex-col gap-1 rounded-md border p-[0.5rem] capitalize">
      <p className="text-ld">{name}</p>
      <p className="text-italics">{category}</p>
      <p className="">
        {quantity > 0 ? `In stock: ${quantity}` : `Out of stock`}
      </p>
    </li>
  );
}

export default Item;
