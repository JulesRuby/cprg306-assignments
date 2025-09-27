import items from './items.json';
import ItemList from './item-list.js';

function Page() {
	return (
		<main>
			<h2 className='text-xl'>Week 3 Assignment Page</h2>

			<ItemList itemList={items} />
		</main>
	);
}

export default Page;
