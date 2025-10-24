import Item from "./item";

function ItemList({ itemList }) {
  return (
    <ul className="flex flex-col overflow-hidden">
      {itemList.map(({ name, category, quantity }, idx) => (
          <Item
              key={idx}
              name={name}
              category={category}
              quantity={quantity}
          />
      ))}
    </ul>
  );
}

export default ItemList;
