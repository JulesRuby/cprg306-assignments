import itemsData from "./items.json";
import ItemList from "./item-list.js";
import useState from "react";
// for metadata for page title and description
import { createPageMetadata } from "../../lib/metadata.js";

const [items, setItems] = useState(itemsData);

const handleAddItem = (newItem) => [...items, newItem];

// using next's generateMetadata function to create dynamic metadata for the page
export async function generateMetadata() {
  return createPageMetadata({
    title: "WEEEEEOOOOO",
    description:
      "Practicing components and props even more by creating a shopping list app.",
  });
}

function Page() {
  return (
    <main className="mx-auto max-w-xl p-4">
      <header className="mb-3 text-2xl font-bold">
        <h1 className="text-xl">Shopping List</h1>
      </header>

      <ItemList itemList={items} onitemAdd={} />
    </main>
  );
}

export default Page;
