import items from "./items.json";
import items from "./item-list.js";
// for metadata for page title and description
import { createPageMetadata } from "../../lib/metadata.js";

// using next's generateMetadata function to create dynamic metadata for the page
export async function generateMetadata() {
  return createPageMetadata({
    title: "Shopping List Part 2",
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

      <ItemList itemList={items} />
    </main>
  );
}

export default Page;
