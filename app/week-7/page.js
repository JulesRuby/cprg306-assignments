"use client";

import itemsData from "./items.json";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import { useState } from "react";
// for metadata for page title and description
// import { createPageMetadata } from "../../lib/metadata.js";

// console.log(typeof itemsData);
// console.log(Array.isArray(itemsData));
// console.log({ itemsData });

// itemsData.forEach((item) => console.log(item));

// using next's generateMetadata function to create dynamic metadata for the page
// export async function generateMetadata() {
//   return createPageMetadata({
//     title: "WEEEEEOOOOO",
//     description:
//       "Practicing components and props even more by creating a shopping list app.",
//   });
// }

function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => [...items, newItem];

  return (
    <main className="mx-auto max-w-xl p-4">
      <header className="mb-3 text-2xl font-bold">
        <h1 className="text-xl">Shopping List</h1>
      </header>

      <NewItem />
      
      <ItemList itemList={items} />
    </main>
  );
}

export default Page;
