"use client";
import { useState } from "react";

import ItemList from "./item-list.js";


function Page() {


  return (
    <main className="mx-auto max-w-xl p-4">
      <header className="mb-3 text-2xl font-bold">
        <h1 className="text-xl">Fetching Data</h1>
      </header>


      <ItemList itemList={[]} />
    </main>
  );
}

export default Page;
