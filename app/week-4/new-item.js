'use client';

import { useState } from 'react';

function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity <= 20) setQuantity(quantity++);
  }
  const decrement = () => {
    if (quantity >= 1) setQuantity(quantity--);
  }

	return (
  <article className="counter-card">
    <header className="card-header">
      <h2 className="text-lg font-bold mb-2">New Item</h2>
    </header>

    <p className="quantity-display">Quantity: {quantity}</p>

    <div className="button-group flex-row gap-2">
      <button className="dec-btn" onClick={decrement}>-</button>
      <button className="inc-btn" onClick={increment}>+</button>
    </div>
  </article>
);
}

export default NewItem;
