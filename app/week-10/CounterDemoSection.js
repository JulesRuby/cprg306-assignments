"use client";

import { useState } from "react";

function CounterDemoSection() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <section className="terminal-gradient-background scanlines text-lumo relative rounded-md p-5">
      <h2 className="mb-4 text-lg font-bold">Counter Demo</h2>
      <p className="mb-4">Current Count: {count}</p>
      <div className="mb-4">
        <div
          className="button-group flex justify-around gap-4 py-2 text-3xl"
        >
          <button
            type="button"
            className="hover:not-disabled:alpha-shudder hover:border-aether disabled:text-vesper disabled:bg-kinetic/40 center flex size-[2rem] cursor-pointer items-center justify-center rounded-[10%] border-3 p-1 leading-[.5] font-bold transition duration-200 ease-in-out disabled:cursor-not-allowed disabled:border-0"
            onClick={decrement}
            disabled={count <= 1}
          >
            -
          </button>
          <button
            type="button"
            className="hover:not-disabled:alpha-shudder hover:border-aether disabled:text-vesper disabled:bg-kinetic/40 center flex size-[2rem] cursor-pointer items-center justify-center rounded-[10%] border-3 p-1 leading-none font-bold transition duration-200 ease-in-out disabled:cursor-not-allowed disabled:border-0"
            onClick={increment}
            disabled={count >= 20}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default CounterDemoSection;
