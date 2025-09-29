function Item({ name, quantity, category }) {
	return (
		<li className='flex flex-col gap-1 p-[0.5rem] border rounded-md capitalize mb-2'>
			<p className='text-ld'>{name}</p>
			<p className='text-italics'>{category}</p>
			<p className="">{quantity > 0 ? `In stock: ${quantity}` : `Out of stock`}</p>
		</li>
	);
}

export default Item;
