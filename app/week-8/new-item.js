"use client";

import { useState } from "react";

import FunSelect from "@/components/forms/fun-select.js";

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen foods",
    "canned goods",
    "dry goods",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItemData = {
      id: Math.random().toString(36).substring(2, 19),
      name,
      quantity,
      category,
    };

    onAddItem(newItemData);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="terminal-gradient-background scanlines text-lumo relative rounded-md p-5"
    >
      <div className="mb-4 relative">
        <label className="mb-2 block" htmlFor="new-item-name">
          Item Name
        </label>
        <input
          type="text"
          name="new-item-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          id="new-item-name"
          className="placeholder:text-lumo w-full rounded border px-3 py-2"
          placeholder="Enter item name"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block" htmlFor="new-item-category">
          Category
        </label>
        {/* <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded border px-3 py-2"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select> */}

        <FunSelect
          id="new-item-category"
          name="new-item-category"
          value={category}
          onChange={setCategory}
          options={categories}
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-center" htmlFor="new-item-quantity">
          Quantity: {quantity}
        </label>
        <div
          id="new-item-quantity"
          className="button-group flex justify-around gap-4 py-2 text-3xl"
          name="new-item-quantity"
        >
          <button
            type="button"
            className="hover:not-disabled:alpha-shudder hover:border-aether disabled:text-vesper disabled:bg-kinetic/40 center flex size-[2rem] cursor-pointer items-center justify-center rounded-[10%] border-3 p-1 leading-[.5] font-bold transition duration-200 ease-in-out disabled:cursor-not-allowed disabled:border-0"
            onClick={decrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <button
            type="button"
            className="hover:not-disabled:alpha-shudder hover:border-aether disabled:text-vesper disabled:bg-kinetic/40 center flex size-[2rem] cursor-pointer items-center justify-center rounded-[10%] border-3 p-1 leading-none font-bold transition duration-200 ease-in-out disabled:cursor-not-allowed disabled:border-0"
            onClick={increment}
            disabled={quantity >= 20}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="hover:not-disabled:alpha-shudder-both hover:not-disabled:border-aether disabled:text-vesper disabled:bg-kinetic/40 bg-exhilarate/50 h-[3rem] w-full cursor-pointer rounded border-3 p-1 font-bold transition duration-200 ease-in-out hover:not-disabled:bg-transparent disabled:cursor-not-allowed disabled:border-0"
      >
        Add Item
      </button>
    </form>
  );
}

export default NewItem;
