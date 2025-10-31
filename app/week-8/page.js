"use client";
import { useState } from "react";

import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";

import items from "./items.json";

function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^a-zA-Z\s]/g, "");

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="mx-auto max-w-xl p-4">
      <header className="mb-3 text-2xl font-bold">
        <h1 className="text-xl">Fetching Data</h1>
      </header>

      <ItemList itemList={items} onItemSelect={handleItemSelect} />

      <section>
        <MealIdeas ingredient={selectedItemName} />
      </section>
    </main>
  );
}

export default Page;
