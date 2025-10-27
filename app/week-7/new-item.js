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
      className="terminal-gradient-background scanlines text-lumo rounded-md p-5"
    >
      <div className="mb-4">
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
          className="w-full rounded border px-3 py-2"
          placeholder="Enter item name"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-white" htmlFor="new-item-category">
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
        <label className="mb-2 text-xl" htmlFor="new-item-quantity">
          Quantity: {quantity}
        </label>
        <div
          id="new-item-quantity"
          className="button-group flex justify-around gap-4 py-2 text-3xl"
          name="new-item-quantity"
        >
          <button
            type="button"
            className="h-[3rem] w-[4rem] cursor-pointer rounded-[10%] bg-orange-300 p-1 align-middle font-bold transition duration-200 ease-in-out hover:bg-green-300 active:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400/50"
            onClick={decrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <button
            type="button"
            className="h-[3rem] w-[4rem] cursor-pointer rounded-[10%] bg-orange-300 p-1 font-bold transition duration-200 ease-in-out hover:bg-green-300 active:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400/50"
            onClick={increment}
            disabled={quantity >= 20}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}

export default NewItem;
