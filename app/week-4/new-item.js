"use client";

import { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <article className="flex h-[20rem] w-sm flex-col justify-between rounded-md bg-gray-900 p-5 text-center">
      <header className="card-header">
        <h2 className="mb-2 text-lg font-bold">The Best Item Ever</h2>
      </header>

      <p className="text-xl">Quantity: {quantity}</p>

      <div className="button-group flex justify-around gap-4 py-2 text-3xl text-black">
        <button
          className="size-[4rem] cursor-pointer rounded-[50%] bg-orange-300 p-3 font-bold transition duration-200 ease-in-out hover:bg-green-300 active:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400/50"
          onClick={decrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <button
          className="pointer size-[4rem] cursor-pointer rounded-[50%] bg-orange-300 p-3 font-bold transition duration-200 ease-in-out hover:bg-green-300 active:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400/50"
          onClick={increment}
          disabled={quantity >= 20}
        >
          +
        </button>
      </div>
    </article>
  );
}

export default NewItem;
