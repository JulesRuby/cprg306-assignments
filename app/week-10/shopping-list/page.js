"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";

import { useAuth } from "@/app/contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-services.js";

function Page() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const [selectedItemName, setSelectedItemName] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/week-10");
    }
  }, [authUser, loading, router]);

  const loadItems = async () => {
    if (authUser) {
      try {
        const fetchedItems = await getItems(authUser.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  };

  useEffect(() => {
    if (authUser) {
      loadItems();
    }
  }, [authUser]);

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^a-zA-Z\s]/g, "");

    setSelectedItemName(cleanedName);
  };

  const handleAddItem = async (newItem) => {
    if (authUser) {
      try {
        //  addItem function expects item data without the id
        const { id, ...itemData } = newItem;
        const docId = await addItem(authUser.uid, itemData);

        // Update local state with the new item including firestore id
        const itemWithId = { id: docId, ...itemData };
        setItems([...items, itemWithId]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl p-4">
      {/* <header className="mb-3 text-2xl font-bold">
        <h1 className="text-xl">Fetching Data</h1>
      </header>

      <ItemList itemList={items} onItemSelect={handleItemSelect} />

      <section>
        <MealIdeas ingredient={selectedItemName} />
      </section> */}
      <header className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Shopping List</h1>
          <Link
            href="/week-10"
            className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome, {authUser.displayName || authUser.email}!
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Add New Item</h2>
          <NewItem onAddItem={handleAddItem} />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Items</h2>
          <ItemList itemList={items} onItemSelect={handleItemSelect} />
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Meal Ideas</h2>
          <MealIdeas ingredient={selectedItemName} />
        </section>
      </div>
    </main>
  );
}

export default Page;
