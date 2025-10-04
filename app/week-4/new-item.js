'use client';

import { useState } from 'react';

function NewItem() {
	const [quantity, setQuantity] = useState(1);

	const increment = () => {
		if (quantity < 20) setQuantity(quantity + 1);
	};
	const decrement = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	return (
		<article className='bg-gray-900 flex flex-col h-[20rem] justify-between p-5 rounded-md text-center w-sm'>
			<header className='card-header'>
				<h2 className='text-lg font-bold mb-2'>The Best Item Ever</h2>
			</header>

			<p className='text-xl'>Quantity: {quantity}</p>

			<div className='button-group flex justify-around gap-4 py-2 text-black text-3xl'>
				<button
					className='bg-orange-300 cursor-pointer disabled:bg-gray-400/50 disabled:cursor-not-allowed hover:bg-green-300 font-bold p-3 rounded-[50%] size-[4rem] transition duration-200 ease-in-out active:bg-green-600'
					onClick={decrement}
					disabled={quantity <= 1}
				>
					-
				</button>
				<button
					className='bg-orange-300 cursor-pointer disabled:bg-gray-400/50 disabled:cursor-not-allowed pointer hover:bg-green-300 font-bold p-3 rounded-[50%] size-[4rem] transition duration-200 ease-in-out active:bg-green-600'
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
