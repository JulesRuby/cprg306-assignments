// week-5 NewItem part 2 + Form Interactivity
"use client";

import { useState } from "react";
import NewItem from "./new-item";

function Page() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log({ item });

    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-950 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">Week 5 Assignment</h1>
        <p className="mt-2 text-gray-400">Add New Item Form</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-white">Add New Item</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter item name"
          />
        </div>

        <NewItem quantity={quantity} setQuantity={setQuantity} />

        <div className="mb-6">
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700 active:bg-blue-800"
        >
          Add Item
        </button>
      </form>
    </main>
  );
}

export default Page;
