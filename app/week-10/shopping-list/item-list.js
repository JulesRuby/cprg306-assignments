"use client";

import { useState } from "react";
import Item from "./item";

function ItemList({ itemList, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemList].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <section>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-solar text-sm text-gray-600">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`rounded border px-3 py-1 text-sm transition-colors ${
            sortBy === "name"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`rounded border px-3 py-1 text-sm transition-colors ${
            sortBy === "category"
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          Category
        </button>
      </div>
      <ul className="flex flex-col overflow-hidden">
        {sortedItems.map((item) => (
          <Item
            key={`item-${item.id}`}
            name={item.name}
            category={item.category}
            quantity={item.quantity}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </section>
  );
}

export default ItemList;
