import Item from './item';

function ItemList({ listList }) {
	return (
		<ul className='flex flex-col overflow-hidden'>
			{listList.map(({ name, category, quantity }, idx) => (
				<Item
					key={`idx ${idx}`}
					name={name}
					category={category}
					quantity={quantity}
				/>
			))}
		</ul>
	);
}
