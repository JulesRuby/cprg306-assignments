"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import items from "./items.json";

import { useAuth } from "@/app/contexts/AuthContext";

function Page() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!loading && !authUser) {
      router.push("/week-9");
    }
  }, [authUser, loading, router]);

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^a-zA-Z\s]/g, "");

    setSelectedItemName(cleanedName);
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
            href="/week-9"
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
