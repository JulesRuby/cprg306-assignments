import items from './items.json';
import ItemList from './item-list.js';
// for metadata for page title and description
import { createPageMetadata } from '../../lib/metadata.js';

// using next's generateMetadata function to create dynamic metadata for the page
export async function generateMetadata() {
	return createPageMetadata({
		title: 'Shopping List',
		description:
			'Practicing components and props by creating a shopping list app.',
	});
}

function Page() {
	return (
		<main className='p-4 max-w-xl mx-auto'>
			<header className="text-2xl font-bold mb-3">
				<h1 className='text-xl'>Shopping List</h1>
			</header>

			<ItemList itemList={items} />
		</main>
	);
}

export default Page;
