function Item({ name, quantity, category }) {
	return (
		<li className='flex flex-col gap-1 p-[0.5rem] border-b'>
			<span className='text-bold'>{name}</span>
			<span className='text-italics'>{category}</span>
			<span>{quantity > 0 ? `In stock: ${quantity}` : `Out of stock`}</span>
		</li>
	);
}
